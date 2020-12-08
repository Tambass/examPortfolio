module.exports = {
    getSkillsPage: (req, res) => {
        res.render("admin_views/admin_skills", {title: "Admin Skills"});
    },
    getAddSkillPage: (req, res) => {
        res.render("admin_views/admin_addSkill", {title: "Add Skill"});
    },
    getEditSkillPage: (req, res) => {
        res.render("admin_views/admin_editSkill", {title: "Edit Skill"});
    }
}