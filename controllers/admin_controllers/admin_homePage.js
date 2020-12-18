module.exports = {
    getAdminPage: async (req, res) => {

        if(req.session.adminId){
            res.render("admin_views/admin_index", {title: "Admin"});
        } else {
            res.redirect("/login");
        }

        // res.render("admin_views/admin_index", {title: "Admin"});

    }
}