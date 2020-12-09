module.exports = {
    getSkillsPage: async (req, res) => {

        const skill = await query("SELECT t.technologie_id, t.name AS name, t.image, t.status, tc.name AS category FROM Technologie AS t INNER JOIN Technology_Category AS tc ON tc.technology_category_id = t.technology_category_id;")

        try {
            res.render("admin_views/admin_skills", {
                title: "Admin Skills",
                skill,
            });
        } catch (err) {
            res.send(err);
        }
    },
    getAddSkillPage: (req, res) => {
        res.render("admin_views/admin_addSkill", {title: "Add Skill"});
    },
    getEditSkillPage: (req, res) => {
        res.render("admin_views/admin_editSkill", {title: "Edit Skill"});
    }
}