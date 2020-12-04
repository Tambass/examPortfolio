module.exports = {
    getHomePage: (req, res) => {
        res.render("users_views/index", {title: "Home"});
    }
}