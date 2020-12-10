module.exports = {

    // AFFICHE LA PAGE DES CATEGORIES
    getCategoriesPage: async (req, res) => {

        const projectCategory = await query("SELECT project_category_id AS id, name, status FROM Project_Category");

        const skillCategory = await query("SELECT technology_category_id AS id, name, status FROM Technology_Category");
        
        try {
            res.render("admin_views/admin_categories", {
                title: "Admin Categories",
                projectCategory,
                skillCategory,
            });
        } catch (err) {
            res.send(err);
        }
    },

    // **********************
    // *** PARTIE PROJETS ***
    // **********************

    // AFFICHE LA PAGE D'AJOUT D'UNE CATEGORIE PROJET
    getAddProjectCategoryPage: (req, res) => {
        res.render("admin_views/admin_addProjectCategory", {title: "Add Project Category"});
    },

    // AJOUTE UNE CATEGORIE PROJET
    addProjectCategory: (req, res) => {

        const body = req.body;
        const { name } = body;

        const query = "INSERT INTO Project_Category (status, name) VALUES (true, '" + name + "');";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/categories");
        })
    },

    // AFFICHE LA PAGE D'EDITION D'UNE CATEGORIE PROJET
    getEditProjectCategoryPage: async (req, res) => {

        const id = req.params.id;

        const projectCategory = await query("SELECT project_category_id AS id, name, status FROM Project_Category WHERE project_category_id = '" + id + "';");

        try {
            res.render("admin_views/admin_editProjectCategory", {
                title: "Edit Project Category",
                projectCategory: projectCategory[0],
            });            
        } catch (err) {
            return res.send(err);
        }
    },

    // MET A JOUR UNE CATEGORIE PROJET
    editProjectCategory: (req, res) => {

        const body = req.body;
        const id = req.params.id;

        const { name } = body;

        const query = "UPDATE Project_Category SET name = '" + name + "' WHERE project_category_id = '" + id + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/categories");
        })

    },

    // SUPPRIME UNE CATEGORIE PROJET
    deleteProjectCategory: (req, res) => {

        const id = req.params.id;

        const query = "DELETE FROM Project_Category WHERE project_category_id = '" + id + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err)
            }
            res.redirect("/admin/categories");
        })
    },

    // CHANGE LE STATUS D'UNE CATEGORIE PROJET
    changeProjectCategoryStatus: (req, res) => {
        
        const id = req.params.id;

        const status = "UPDATE Project_Category SET status = (CASE WHEN status=0 THEN 1 WHEN status=1 THEN 0 ELSE status END) WHERE project_category_id = '" +
        id + "';";

        db.query(status, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/categories");
        })
    },

    // **************************
    // *** PARTIE COMPETENCES ***
    // **************************

    // AFFICHE LA PAGE D'AJOUT D'UNE CATEGORIE COMPETENCE
    getAddSkillCategoryPage: (req, res) => {
        res.render("admin_views/admin_addSkillCategory", {title: "Add Skill Category"});
    },

    //AJOUTE UNE CATEGORIE COMPETENCE
    addSkillCategory: (req, res) => {
        
        const body = req.body;
        const { name } = body;

        const query = "INSERT INTO Technology_Category (status, name) VALUES (true, '" + name + "');";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/categories");
        })
    },

    // AFFICHE LA PAGE D'EDITION D'UNE CATEGORIE COMPETENCE
    getEditSkillCategoryPage: async (req, res) => {

        const id = req.params.id;

        const skillCategory = await query("SELECT technology_category_id AS id, name, status FROM Technology_Category WHERE technology_category_id = '" + id + "';");

        try {
            res.render("admin_views/admin_editSkillCategory", {
                title: "Edit Skill Category",
                skillCategory: skillCategory[0],
            });            
        } catch (err) {
            return res.send(err);
        }
    },

    // MET A JOUR UNE CATEGORIE COMPETENCE
    editSkillCategory: (req, res) => {

        const body = req.body;
        const id = req.params.id;

        const { name } = body;

        const query = "UPDATE Technology_Category SET name = '" + name + "' WHERE technology_category_id = '" + id + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/categories");
        })
    },

    // SUPPRIME UNE CATEGORIE COMPETENCE
    deleteSkillCategory: (req, res) => {
        
        const id = req.params.id;

        const query = "DELETE FROM Technology_Category WHERE technology_category_id = '" + id + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err)
            }
            res.redirect("/admin/categories");
        })
    },

    // CHANGE LE STATUS D'UNE CATEGORIE PROJET
    changeSkillCategoryStatus: (req, res) => {

        const id = req.params.id;

        const status = "UPDATE Technology_Category SET status = (CASE WHEN status=0 THEN 1 WHEN status=1 THEN 0 ELSE status END) WHERE technology_category_id = '" +
        id + "';";

        db.query(status, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/categories");
        })
    },
}