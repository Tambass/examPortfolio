module.exports = function (app) {

    // *************************
    // ****USERS CONTROLLERS****
    // *************************

    // HomePage
    const {getHomePage} = require("../controllers/users_controllers/homePage");

    // LoginPage
    const {getLogin, postLogin} = require("../controllers/users_controllers/login");

    // ********************
    // ****USERS ROUTES****
    // ********************

    app.route("/").get(getHomePage);

    app.route("/login").get(getLogin).post(postLogin);
}