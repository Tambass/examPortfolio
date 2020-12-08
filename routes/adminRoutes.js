module.exports = function (app) {
    // ****USERS CONTROLLERS****

    // HomePage
    const {getAdminPage} = require("../controllers/admin_controllers/admin_homePage");

    // AboutPage
    const {getAboutPage} = require("../controllers/admin_controllers/admin_about");

    // ****USERS ROUTES****

    app.route("/admin").get(getAdminPage);

    app.route("/admin/about").get(getAboutPage);
}