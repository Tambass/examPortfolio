module.exports = {
    getAboutPage: async (req, res) => {
        const admin = await query("SELECT admin_id AS id, firstname, lastname, email, phone, adress, zipcode, city FROM Admin")

        try {
            res.render("admin_views/admin_about", {title: "About Admin", admin: admin[0]});
        } catch (err) {
            res.send(err);
        }
    },

    editProfile:(req, res) => {

        const body = req.body;

        const { firstname } = body;
        const { lastname } = body;
        const { email } = body;
        const { phone } = body;
        const { address } = body;
        const { zipcode } = body;
        const { city } = body;

        const query = "UPDATE Admin SET firstname = '" + 
        firstname + "', lastname = '" + lastname + "', email = '" + 
        email + "', phone = '" + phone + "', adress = '" + 
        address + "', zipcode = '" + zipcode + "', city = '" + 
        city + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/about");
        })
    }
}