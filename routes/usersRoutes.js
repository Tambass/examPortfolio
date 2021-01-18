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

    /**
    * @swagger
    * /:
    *  get:
    *      summary: PAGE D'ACCUEIL
    *      description: Affiche la page d'accueil
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    app.route("/").get(getHomePage);

    /**
    * @swagger
    * /login:
    *  get:
    *      summary: PAGE DE CONNEXION
    *      description: Affiche la page de login
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
       /**
    * @swagger
    * /login:
    *  post:
    *      summary: CONNEXION
    *      description: envoi du formulaire
    *      responses:
    *          200:
    *              description: Connexion réussie !
    */
    app.route("/login").get(getLogin).post(postLogin);
}