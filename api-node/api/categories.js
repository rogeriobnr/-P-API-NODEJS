module.exports = (app) => {
    /**
     * Creation of the Read Method to read the user's insertions into the database.
     */
    const read = async (req, res) => {
        const categories = await app
            .database('categories')
            .select("*")

        if (categories.select) {
            return res.status(200).json({ Mensagem: "Lista exibida" });
        }
        return res.json(categories);
    }
    /**
     * Creation of the Save Method to record the user's insertions into the database.
     */
    const save = async (req, res) => {
        const category = { ...req.body };

        if (!category.name) {
            return res.status(400).json({ error: "Nome não informado" });
        }

        const categoryExists = await app
            .database("categories")
            .where({ name: category.name })
            .first();

        if (categoryExists) {
            return res.status(400).json({ error: "Nome já cadastrado" });
        }

        category.image = "category.png";

        app
            .database('categories')
            .insert(category)
            .then((_) => res.status(200).send())
            .catch((err) => res.status(500).send())

        if (category.name) {
            return res.status(200).json({ Mensagem: "Nome cadastrado!" });
        }


    }
    return { read, save };
}
