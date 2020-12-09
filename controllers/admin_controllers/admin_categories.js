module.exports = {
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
    getAddProjectCategoryPage: (req, res) => {
        res.render("admin_views/admin_addProjectCategory", {title: "Add Project Category"});
    },
    getEditProjectCategoryPage: (req, res) => {
        res.render("admin_views/admin_editProjectCategory", {title: "Edit Project Category"});
    },
    getAddSkillCategoryPage: (req, res) => {
        res.render("admin_views/admin_addSkillCategory", {title: "Add Skill Category"});
    },
    getEditSkillCategoryPage: (req, res) => {
        res.render("admin_views/admin_editSkillCategory", {title: "Edit Skill Category"});
    },
}