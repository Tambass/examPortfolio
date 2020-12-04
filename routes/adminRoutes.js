module.exports = function (app) {
    // ****USERS CONTROLLERS****

    // HomePage
    const {getAdminPage} = require("../controllers/admin_controllers/admin_homePage");

    // ****USERS ROUTES****

    app.route("/admin").get(getAdminPage);
}