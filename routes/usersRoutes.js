module.exports = function (app) {

    // *************************
    // ****USERS CONTROLLERS****
    // *************************

    // HomePage
    const {getHomePage} = require("../controllers/users_controllers/homePage");

    // ********************
    // ****USERS ROUTES****
    // ********************

    app.route("/").get(getHomePage);
}