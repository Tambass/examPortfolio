module.exports = {
    getHomePage: async (req, res) => {

        const admin = await query("SELECT firstname, lastname, email, phone, status FROM Admin");

        const project = await query("SELECT p.name, p.description, p.image, p.link, p.status, pc.name AS category FROM Project AS p INNER JOIN Project_Category AS pc ON pc.project_category_id = p.project_category_id;");

        const frontCategory = await query("SELECT technology_category_id AS categoryId, name, status  FROM Technology_Category WHERE technology_category_id = 1");

        const frontSkill = await query("SELECT t.name, t.image, t.status, tc.name AS category FROM Technologie AS t INNER JOIN Technology_Category AS tc ON tc.technology_category_id = t.technology_category_id WHERE t.technology_category_id = 1;");

        const backCategory = await query("SELECT technology_category_id AS categoryId, name, status  FROM Technology_Category WHERE technology_category_id = 2");

        const backSkill = await query("SELECT t.name, t.image, t.status, tc.name AS category FROM Technologie AS t INNER JOIN Technology_Category AS tc ON tc.technology_category_id = t.technology_category_id WHERE t.technology_category_id = 2;");

        const dataCategory = await query("SELECT technology_category_id AS categoryId, name, status  FROM Technology_Category WHERE technology_category_id = 3");

        const dataSkill = await query("SELECT t.name, t.image, t.status, tc.name AS category FROM Technologie AS t INNER JOIN Technology_Category AS tc ON tc.technology_category_id = t.technology_category_id WHERE t.technology_category_id = 3;");

        const devCategory = await query("SELECT technology_category_id AS categoryId, name, status  FROM Technology_Category WHERE technology_category_id = 4");

        const devSkill = await query("SELECT t.name, t.image, t.status, tc.name AS category FROM Technologie AS t INNER JOIN Technology_Category AS tc ON tc.technology_category_id = t.technology_category_id WHERE t.technology_category_id = 4;");

        try {
            res.render("users_views/index", {
                title: "Développeur Web en Vendée",
                description: "développeur web junior",
                admin: admin[0],
                project,
                frontCategory: frontCategory[0],
                frontSkill,
                backCategory: backCategory[0],
                backSkill,
                dataCategory: dataCategory[0],
                dataSkill,
                devCategory: devCategory[0],
                devSkill,
            });            
        } catch (err) {
            res.send(err);
        }
    }
}