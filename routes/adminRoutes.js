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
    } = require("../controllers/admin_controllers/admin_portfolio");

    // AdminSkillsPage
    const {
        getSkillsPage,
        getAddSkillPage,
        getEditSkillPage
    } = require("../controllers/admin_controllers/admin_skills");

    // AdminCategoriesPage
    const {
        getCategoriesPage,
        getAddProjectCategoryPage,
        getEditProjectCategoryPage,
        getAddSkillCategoryPage,
        getEditSkillCategoryPage
    } = require("../controllers/admin_controllers/admin_categories");

    // ****USERS ROUTES****

    app.route("/admin").get(getAdminPage);

    app.route("/admin/about").get(getAboutPage);

    app.route("/admin/portfolio").get(getPortfolioPage);
    app.route("/admin/portfolio/add").get(getAddProjectPage).post(addProject);
    app.route("/admin/portfolio/edit/:id").get(getEditProjectPage).put(editProject);

    app.route("/admin/skills").get(getSkillsPage);
    app.route("/admin/skills/add").get(getAddSkillPage);
    app.route("/admin/skills/edit").get(getEditSkillPage);

    app.route("/admin/categories").get(getCategoriesPage);
    app.route("/admin/categories/add_project_category").get(getAddProjectCategoryPage);
    app.route("/admin/categories/edit_project_category").get(getEditProjectCategoryPage);
    app.route("/admin/categories/add_skill_category").get(getAddSkillCategoryPage);
    app.route("/admin/categories/edit_skill_category").get(getEditSkillCategoryPage);
}