module.exports = {
    getAdminPage: async (req, res) => {

        try {
            if(req.session.adminId){
                res.render("admin_views/admin_index", {title: "Admin"});
            } else {
                res.redirect("/login");
            }
        } catch (err) {
            res.send(err);
        }
    }
}