const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();

// EXPRESS-SESSION
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        name: "cookie",
        rolling: true,
        cookie: { maxAge: 1 * 60 * 60 * 1000 },
    })
);

module.exports = {

    // AFFICHE LA PAGE DE LOGIN
    getLogin: async (req, res, next) => {
        res.render("users_views/login", {title: "Login"});
    },

    // ENVOI LE LOG
    postLogin: async (req, res, next) => {
        const body = req.body;
        const {email} = body;
        const {password} = body;

        const admin = "SELECT admin_id, email, password FROM Admin WHERE email = '" + email + "';";

        await query(admin, (err, result) => {

            // VERIFIE SI L'EMAIL EST CONNU OU CORRECT

            // Si l'email est inconnu ou incorrect
            if(err || result.length === 0) {
                res.redirect("/login");
            } else {
                // S'il est connu
                // Compare le mot de passe hashé
                bcrypt.compare(password, result[0].password, async (err, success) => {
                    // S'il y a erreur
                    if(err) {
                        res.redirect("/login");
                    }

                    // S'il y a succès
                    if(success) {
                        const adminHash = "SELECT admin_id, email, password FROM Admin WHERE email = '" +
                        email + "' AND password = '" + result[0].password + "';";

                        await query(
                            adminHash, function(err, result) {
                                // Si le résultat est juste
                                if(result.length) {
                                    req.session.loggedin = true,
                                    req.session.cookie.maxAge = 5 * 60 * 1000,
                                    req.session.adminId = result[0].admin_id,
                                    req.session.email = result[0].email,
                                    req.session.password = result[0].password;

                                    res.redirect("/admin")
                                } else {
                                    res.send(err);
                                }
                            }
                        );

                    } else {
                        // Si le mot de passe est incorrect
                        res.redirect("/login");
                    }
                })
            }
            
        })
    }

}