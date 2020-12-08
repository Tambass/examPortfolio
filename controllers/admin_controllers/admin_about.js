module.exports = {
    getAboutPage: (req, res) => {
        res.render("admin_views/admin_about", {title: "About Admin"});
    }
}