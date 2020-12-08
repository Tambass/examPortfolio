module.exports = {
    getSkillsPage: (req, res) => {
        res.render("admin_views/admin_skills", {title: "Admin Skills"});
    }
}