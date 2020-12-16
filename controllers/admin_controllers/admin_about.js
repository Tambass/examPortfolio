const bcrypt = require("bcrypt");

module.exports = {
    getAboutPage: async (req, res) => {
        const admin = await query("SELECT admin_id AS id, firstname, lastname, email, phone, adress, zipcode, city, password FROM Admin")

        try {
            res.render("admin_views/admin_about", {title: "About Admin", admin: admin[0]});
        } catch (err) {
            res.send(err);
        }
    },

    editProfile: async (req, res) => {

        const body = req.body;

        const { firstname } = body;
        const { lastname } = body;
        const { email } = body;
        const { phone } = body;
        const { address } = body;
        const { zipcode } = body;
        const { city } = body;
        const { password } = body;

        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, salt);

        const query = "UPDATE Admin SET firstname = '" + 
        firstname + "', lastname = '" + lastname + "', email = '" + 
        email + "', phone = '" + phone + "', adress = '" + 
        address + "', zipcode = '" + zipcode + "', city = '" + 
        city + "', password = '" + passHash + "';";

        db.query(query, (err, result) => {
            if(err) {
                return res.send(err);
            }
            res.redirect("/admin/about");
            //console.log("pass hashé", passHash);
        })
    },
}