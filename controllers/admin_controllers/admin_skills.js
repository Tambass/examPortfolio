const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();

// FileUpload
app.use(fileupload());

module.exports = {

    // AFFICHE LA PAGE DES COMPETENCES
    getSkillsPage: async (req, res) => {

        const skill = await query("SELECT t.technologie_id AS id, t.name AS name, t.image, t.status, tc.name AS category FROM Technologie AS t INNER JOIN Technology_Category AS tc ON tc.technology_category_id = t.technology_category_id;")

        try {
            res.render("admin_views/admin_skills", {
                title: "Admin Skills",
                skill,
            });
        } catch (err) {
            res.send(err);
        }
    },

    // AFFICHE LA PAGE D'AJOUT D'UNE COMPETENCE
    getAddSkillPage: async (req, res) => {

        const category = await query("SELECT technology_category_id AS id, name FROM Technology_Category;");

        try {
            res.render("admin_views/admin_addSkill", {
                title: "Add Skill",
                category,
            });            
        } catch (err) {
            res.send(err);
        }
    },

    // AJOUTE UNE COMPETENCE
    addSkill: (req, res) => {
        
        const body = req.body;

        const { name } = body;
        const { categoryId } = body;
        const { image } = req.files;
        const imageName = image.name;

        const fileUpload = path.resolve(
            __dirname,
            "../../public/images/",
            imageName
        );

        const upload = image.mv(fileUpload);

        const query = "INSERT INTO Technologie (status, name, image, technology_category_id) VALUES (true, '" +
        name + "', '" + imageName + "', '" + categoryId + "');";

        db.query(query, upload, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/skills");
        });
    },

    // AFFICHE LA PAGE D'EDITION D'UNE COMPETENCE
    getEditSkillPage: async (req, res) => {

        const id = req.params.id;

        const skill = await query("SELECT t.technologie_id AS id, t.name AS name, t.image, tc.name AS category FROM Technologie AS t INNER JOIN Technology_Category AS tc ON tc.technology_category_id = t.technology_category_id WHERE t.technologie_id = '" + id + "';");

        const category = await query("SELECT technology_category_id AS id, name FROM Technology_Category;");

        try {
            res.render("admin_views/admin_editSkill", {
                title: "Edit Skill",
                skill: skill[0],
                category,
            });            
        } catch (err) {
            res.send(err);
        }
    },

    // MET A JOUR UNE COMPETENCE
    editSkill: (req, res) => {

        const body = req.body;
        const id = req.params.id;

        const { name } = body;
        const { categoryId } = body;
        const { image } = req.files;
        const imageName = image.name;

        const fileUpload = path.resolve(
            __dirname,
            "../../public/images/",
            imageName
        );

        const upload = image.mv(fileUpload);

        const query = "UPDATE Technologie SET name = '" +
        name + "', image = '" + imageName + "', technology_category_id = '" +
        categoryId + "' WHERE technologie_id = '" + id + "';";

        db.query(query, upload, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/skills");
        })
    },

    // SUPPRIME UNE COMPETENCE
    deleteSkill: (req, res) => {
        const id = req.params.id;

        const query = "DELETE FROM Technologie WHERE technologie_id = '" + id + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/skills");
        })
    },

    // CHANGE LE STATUS D'UNE COMPETENCE
    changeSkillStatus: (req, res) => {

        const id = req.params.id;

        const skill = "UPDATE Technologie SET status = (CASE WHEN status=0 THEN 1 WHEN status=1 THEN 0 ELSE status END) WHERE technologie_id = '" +
        id + "';";

        db.query(skill, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/skills");
        })
    },
}