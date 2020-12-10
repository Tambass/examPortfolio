module.exports = function (app) {
    // ****USERS CONTROLLERS****

    // HomePage
    const {getAdminPage} = require("../controllers/admin_controllers/admin_homePage");

    // AboutPage
    const {getAboutPage} = require("../controllers/admin_controllers/admin_about");

    // AdminPortfolioPage
    const {
        getPortfolioPage,
        getAddProjectPage,
        getEditProjectPage,
        addProject,
        editProject,
        deleteProject,
        changeProjectStatus,
    } = require("../controllers/admin_controllers/admin_portfolio");

    // AdminSkillsPage
    const {
        getSkillsPage,
        getAddSkillPage,
        getEditSkillPage,
        addSkill,
        editSkill,
        deleteSkill,
        changeSkillStatus,
    } = require("../controllers/admin_controllers/admin_skills");

    // AdminCategoriesPage
    const {
        getCategoriesPage,
        getAddProjectCategoryPage,
        getEditProjectCategoryPage,
        getAddSkillCategoryPage,
        getEditSkillCategoryPage,
        addProjectCategory,
        editProjectCategory,
        deleteProjectCategory,
        changeProjectCategoryStatus,
        addSkillCategory,
        editSkillCategory,
        deleteSkillCategory,
        changeSkillCategoryStatus,
    } = require("../controllers/admin_controllers/admin_categories");

    // ****USERS ROUTES****

    app.route("/admin").get(getAdminPage);

    app.route("/admin/about").get(getAboutPage);

    app.route("/admin/portfolio").get(getPortfolioPage);
    app.route("/admin/portfolio/add").get(getAddProjectPage).post(addProject);
    app.route("/admin/portfolio/edit/:id").get(getEditProjectPage).put(editProject);
    app.route("/admin/portfolio/delete/:id").delete(deleteProject);
    app.route("/admin/portfolio/status/:id").put(changeProjectStatus);

    app.route("/admin/skills").get(getSkillsPage);
    app.route("/admin/skills/add").get(getAddSkillPage).post(addSkill);
    app.route("/admin/skills/edit/:id").get(getEditSkillPage).put(editSkill);
    app.route("/admin/skills/delete/:id").delete(deleteSkill);
    app.route("/admin/skills/status/:id").put(changeSkillStatus);

    app.route("/admin/categories").get(getCategoriesPage);
    app.route("/admin/categories/add_project_category").get(getAddProjectCategoryPage).post(addProjectCategory);
    app.route("/admin/categories/edit_project_category/:id").get(getEditProjectCategoryPage).put(editProjectCategory);
    app.route("/admin/categories/delete_project_category/:id").delete(deleteProjectCategory);
    app.route("/admin/categories/status_project_category/:id").put(changeProjectCategoryStatus);
    app.route("/admin/categories/add_skill_category").get(getAddSkillCategoryPage).post(addSkillCategory);
    app.route("/admin/categories/edit_skill_category/:id").get(getEditSkillCategoryPage).put(editSkillCategory);
    app.route("/admin/categories/delete_skill_category/:id").delete(deleteSkillCategory);
    app.route("/admin/categories/status_skill_category/:id").put(changeSkillCategoryStatus);
}