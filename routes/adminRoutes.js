module.exports = function (app) {

    // *************************
    // ****ADMIN CONTROLLERS****
    // *************************

    // Admin Ensure Authenticated
    // const ensureAuthenticated = require("../middleware/auth.js");

    // HomePage
    const {getAdminPage} = require("../controllers/admin_controllers/admin_homePage");

    // AboutPage
    const {
        getAboutPage,
        editProfile,
    } = require("../controllers/admin_controllers/admin_about");

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

    // ********************
    // ****ADMIN ROUTES****
    // ********************

    // ADMIN HOME PAGE
    /**
    * @swagger
    * /admin:
    *  get:
    *      summary: PAGE D'ADMIN
    *      description: Affiche la page d'admin
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    app.route("/admin").get(getAdminPage);

    // ADMIN ABOUT PAGE
    /**
    * @swagger
    * /admin/about:
    *  get:
    *      summary: ADMIN/ABOUT
    *      description: Affiche les infos de l'admin
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    app.route("/admin/about").get(getAboutPage);
    /**
    * @swagger
    * /admin/about/:id:
    *  put:
    *      summary: EDITER LES INFOS
    *      description: Modifier les informations de l'admin
    *      responses:
    *          200:
    *              description: Modification réussie !
    */
    app.route("/admin/about/:id").put(editProfile);

    // ADMIN PORTFOLIO PAGE
    /**
    * @swagger
    * /admin/portfolio:
    *  get:
    *      summary: PAGE DES PROJETS
    *      description: Affiche la page des projets
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    app.route("/admin/portfolio").get(getPortfolioPage);
    /**
    * @swagger
    * /admin/portfolio/add:
    *  get:
    *      summary: PAGE AJOUT PROJET
    *      description: Affiche la page d'ajout d'un projet
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    /**
    * @swagger
    * /admin/portfolio/add:
    *  post:
    *      summary: AJOUTE LE PROJET
    *      description: ajoute le projet
    *      responses:
    *          200:
    *              description: Ajout réussi !
    */
    app.route("/admin/portfolio/add").get(getAddProjectPage).post(addProject);
    /**
    * @swagger
    * /admin/portfolio/edit/:id:
    *  get:
    *      summary: PAGE EDIT PROJET
    *      description: Affiche la page de modification d'un projet
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    /**
    * @swagger
    * /admin/portfolio/edit/:id:
    *  put:
    *      summary: EDITE LE PROJET
    *      description: modifie le projet
    *      responses:
    *          200:
    *              description: Modification réussi !
    */
    app.route("/admin/portfolio/edit/:id").get(getEditProjectPage).put(editProject);
    /**
    * @swagger
    * /admin/portfolio/delete/:id:
    *  delete:
    *      summary: SUPPRIME LE PROJET
    *      description: Supprime le projet
    *      responses:
    *          200:
    *              description: Suppression réussi !
    */
    app.route("/admin/portfolio/delete/:id").delete(deleteProject);
    /**
    * @swagger
    * /admin/portfolio/status/:id:
    *  put:
    *      summary: STATUS PROJET
    *      description: changer le status du projet
    *      responses:
    *          200:
    *              description: Modification réussi !
    */
    app.route("/admin/portfolio/status/:id").put(changeProjectStatus);

    // ADMIN SKILLS PAGE
    /**
    * @swagger
    * /admin/skills:
    *  get:
    *      summary: PAGE COMPETENCES
    *      description: Affiche la page des compétences
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    app.route("/admin/skills").get(getSkillsPage);
    /**
    * @swagger
    * /admin/skills/add:
    *  get:
    *      summary: AJOUTER UNE COMPETENCE
    *      description: Affiche la page d'ajout d'une compétence
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
   /**
    * @swagger
    * /admin/skills/add:
    *  post:
    *      summary: AJOUTE LA COMPETENCE
    *      description: Ajoute la compétence
    *      responses:
    *          200:
    *              description: Ajout réussi !
    */
    app.route("/admin/skills/add").get(getAddSkillPage).post(addSkill);
    /**
    * @swagger
    * /admin/skills/edit/:id:
    *  get:
    *      summary: EDIT UNE COMPETENCE
    *      description: Affiche la page dde modification d'une compétence
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
   /**
    * @swagger
    * /admin/skills/edit/:id:
    *  put:
    *      summary: MODIFIE LA COMPETENCE
    *      description: Modifie la compétence
    *      responses:
    *          200:
    *              description: Modification réussie !
    */
    app.route("/admin/skills/edit/:id").get(getEditSkillPage).put(editSkill);
    /**
    * @swagger
    * /admin/skills/delete/:id:
    *  delete:
    *      summary: SUPPRIMER LA COMPETENCE
    *      description: Supprime la compétence
    *      responses:
    *          200:
    *              description: Supression réussie !
    */
    app.route("/admin/skills/delete/:id").delete(deleteSkill);
    /**
    * @swagger
    * /admin/skills/status/:id:
    *  put:
    *      summary: STATUS COMPETENCE
    *      description: changer le status de la compétence
    *      responses:
    *          200:
    *              description: Modification réussie !
    */
    app.route("/admin/skills/status/:id").put(changeSkillStatus);

    // ADMIN CATEGORIES PAGE
    /**
    * @swagger
    * /admin/categories:
    *  get:
    *      summary: PAGE DES CATEGORIES
    *      description: Affiche la page des catégories
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    app.route("/admin/categories").get(getCategoriesPage);

    // Project_Category part

    /**
    * @swagger
    * /admin/categories/add_project_category:
    *  get:
    *      summary: AJOUT CATEGORIE PROJETS
    *      description: Affiche la page d'ajout d'une catégorie projet
    *      responses:
    *          200:
    *              description: Affichage réussi !
    */
    app.route("/admin/categories/add_project_category").get(getAddProjectCategoryPage).post(addProjectCategory);
    app.route("/admin/categories/edit_project_category/:id").get(getEditProjectCategoryPage).put(editProjectCategory);
    app.route("/admin/categories/delete_project_category/:id").delete(deleteProjectCategory);
    app.route("/admin/categories/status_project_category/:id").put(changeProjectCategoryStatus);

    // Skill_Category part
    app.route("/admin/categories/add_skill_category").get(getAddSkillCategoryPage).post(addSkillCategory);
    app.route("/admin/categories/edit_skill_category/:id").get(getEditSkillCategoryPage).put(editSkillCategory);
    app.route("/admin/categories/delete_skill_category/:id").delete(deleteSkillCategory);
    app.route("/admin/categories/status_skill_category/:id").put(changeSkillCategoryStatus);
}