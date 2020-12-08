module.exports = {
    getPortfolioPage: (req, res) => {
        res.render("admin_views/admin_portfolio", {title: "Admin Portfolio"});
    },

    getAddProjectPage: (req, res) => {
        res.render("admin_views/admin_addProject", {title: "Add project"});
    }
}