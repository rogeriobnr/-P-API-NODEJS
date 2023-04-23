module.exports = (app) => {
    /**
     * Creation of the Read Method to read the user's insertions into the database.
     */
    const read = async (req, res) => {
        const categories = await app
            .database('categories')
            .select("*")

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
    /**
     * Delete the register user by id from the database
     */
    const remove = async (req, res) => {

        const idCategory = req.params.id;

        if (!idCategory) {
            return res.status(400).json({ error: "Id não informado" });
        }

        const categoryExists = app.database('categories').where({ id: idCategory }).first();
        if (!categoryExists) {
            return res.status(400).json({ error: "Id não encontrado" });
        }
        app.database('categories').where({ id: idCategory }).del();
        return res.status(204).send();
    }
    // /**
    //  * Creation of the Update Method to update the user's insertions into the database.
    //  */
    // const update = async (req, res) => {
    //     const { id } = req.params;
    //     const { name } = req.body;
    //     const { image } = req.body;
    //     const category = { id, name, image };

    return { read, save, remove }
}
