const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();

// FileUpload
app.use(fileupload());

module.exports = {
    // AFFICHE LA PAGE DES PROJETS
    getPortfolioPage: async (req, res) => {

        const project = await query("SELECT project_id AS id, name, status FROM Project");

        try {
            res.render("admin_views/admin_portfolio", {
                title: "Admin Portfolio",
                project,
            });        
        } catch (err) {
            res.send(err);
        }
    },

    // AFFICHE LA PAGE D'AJOUT D'UN PROJET
    getAddProjectPage: async (req, res) => {

        const category = await query("SELECT project_category_id AS id, name FROM Project_Category;");

        try {
            res.render("admin_views/admin_addProject", {
                title: "Add project",
                category,
            });
        } catch (err) {
            res.send(err);
        }
    },

    // AJOUTE UN PROJET
    addProject: (req, res) => {

        const body = req.body;

        const { name } = body;
        const { content } = body;
        const { link } = body;
        const { categoryId } = body;
        const { image } = req.files;
        const imageName = image.name;

        const fileUpload = path.resolve(
            __dirname,
            "../../public/images/",
            imageName
        );

        const upload = image.mv(fileUpload);

        const query = 
        "INSERT INTO Project (status, name, description, image, link, project_category_id) VALUES (true, '" +
        name + "', '" + content + "', '" + imageName + "', '" + link + "', '" + categoryId + "');";

        db.query(query, upload, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/portfolio")
        });
    },

    // AFFICHE LA PAGE D'EDITION D'UN PROJET
    getEditProjectPage: async (req, res) => {

        const id = req.params.id;

        const project = await query("SELECT p.project_id AS id, p.name, p.description, p.image, p.link, p.project_category_id AS categoryId, pc.name AS category FROM Project AS p INNER JOIN Project_Category AS pc ON pc.project_category_id = p.project_category_id WHERE project_id = '" + id + "';");

        const category = await query("SELECT project_category_id AS id, name FROM Project_Category;");

        try {
            res.render("admin_views/admin_editProject", {
                title: "Edit project",
                project: project[0],
                category,
            });            
        } catch (err) {
            res.send(err);
        }
    },

    // MET A JOUR UN PROJET
    editProject: (req, res) => {
        
        const body = req.body;
        const id = req.params.id;

        const { name } = body;
        const { content } = body;
        const { link } = body;
        const { categoryId } = body;
        const { image } = req.files;
        const imageName = image.name;

        const fileUpload = path.resolve(
            __dirname,
            "../../public/images/",
            imageName
        );

        const upload = image.mv(fileUpload);

        const query = "UPDATE Project SET name = '" + 
        name + "', description = '" + content + "', image = '" + 
        imageName + "', link = '" + link + "', project_category_id = '" + 
        categoryId + "' WHERE project_id = '" + id + "';";

        db.query(query, upload, (err, result) => {
            if(err) {
               return res.send(err);
            }
            res.redirect("/admin/portfolio");
        });
    },

    // SUPPRIME UN PROJET
    deleteProject: (req, res) => {

        const id = req.params.id;

        const query = "DELETE FROM Project WHERE project_id = '" + id + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/portfolio");
        })
    }
}