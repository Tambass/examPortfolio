module.exports = {
    getAboutPage: async (req, res) => {
        const admin = await query("SELECT * FROM Admin")

        try {
            res.render("admin_views/admin_about", {title: "About Admin", admin: admin[0]});
        } catch (err) {
            res.send(err);
        }
    }
}