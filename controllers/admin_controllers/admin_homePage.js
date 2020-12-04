module.exports = {
    getAdminPage: (req, res) => {
        res.render("admin_views/admin_index", {title: "Admin"});
    }
}