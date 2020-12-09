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
    getEditProjectCategoryPage: (req, res) => {
        res.render("admin_views/admin_editProjectCategory", {title: "Edit Project Category"});
    },

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
    getEditSkillCategoryPage: (req, res) => {
        res.render("admin_views/admin_editSkillCategory", {title: "Edit Skill Category"});
    },
}