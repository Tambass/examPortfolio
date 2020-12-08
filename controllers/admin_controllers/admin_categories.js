module.exports = {
    getCategoriesPage: (req, res) => {
        res.render("admin_views/admin_categories", {title: "Admin Categories"});
    }
}