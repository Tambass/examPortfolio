module.exports = {
    getCategoriesPage: (req, res) => {
        res.render("admin_views/admin_categories", {title: "Admin Categories"});
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