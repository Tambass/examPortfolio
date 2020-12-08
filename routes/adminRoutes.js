module.exports = function (app) {
    // ****USERS CONTROLLERS****

    // HomePage
    const {getAdminPage} = require("../controllers/admin_controllers/admin_homePage");

    // AboutPage
    const {getAboutPage} = require("../controllers/admin_controllers/admin_about");

    // AdminPortfolioPage
    const {getPortfolioPage, getAddProjectPage, getEditProjectPage} = require("../controllers/admin_controllers/admin_portfolio");

    // AdminSkillsPage
    const {getSkillsPage} = require("../controllers/admin_controllers/admin_skills");

    // AdminCategoriesPage
    const {getCategoriesPage} = require("../controllers/admin_controllers/admin_categories");

    // ****USERS ROUTES****

    app.route("/admin").get(getAdminPage);

    app.route("/admin/about").get(getAboutPage);

    app.route("/admin/portfolio").get(getPortfolioPage);
    app.route("/admin/portfolio/add").get(getAddProjectPage);
    app.route("/admin/portfolio/edit").get(getEditProjectPage);

    app.route("/admin/skills").get(getSkillsPage);

    app.route("/admin/categories").get(getCategoriesPage);
}