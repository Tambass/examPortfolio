module.exports = {
    getPortfolioPage: async (req, res) => {

        const project = await query("SELECT project_id, name, status FROM Project");

        try {
            res.render("admin_views/admin_portfolio", {
                title: "Admin Portfolio",
                project,
            });        
        } catch (err) {
            res.send(err);
        }
    },

    getAddProjectPage: (req, res) => {
        res.render("admin_views/admin_addProject", {title: "Add project"});
    },

    getEditProjectPage: (req, res) => {
        res.render("admin_views/admin_editProject", {title: "Edit project"});
    },
}