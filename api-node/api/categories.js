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
     * Creation of the read By id Method to read the user's insertions into the database.
     */
    const readById = async (req, res) => {

        const idCategory = req.params.id;

        const categoryExists = await app.database('categories').where({ id: idCategory }).first();

        if (!categoryExists) {
            return res.status(400).json({ error: "Categoria não encontrada" });
        }

        const category = await app.database('categories').where({ id: idCategory }).first();

        return res.json(category);
    }
    /**
     * Creation of the Save Method to record the user's insertions into the database.
     */
    const save = async (req, res) => {
        const category = { ...req.body };

        if (req.params.id) {
            category.id = req.params.id;
        }
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

        if (req.params.id) {

            await app
                .database('categories')
                .update(category)
                .where({ id: category.id })
                .then((_) => res.status(201).send())
                .catch((err) => res.status(500).send())
        } else {
            await app
                .database('categories')
                .insert(category)
                .then((_) => res.status(200).send())
                .catch((err) => res.status(500).send())
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

        const categoryExists = await app.database('categories').where({ id: idCategory }).first();

        if (!categoryExists) {
            return res.status(400).json({ error: "Id não encontrado" });
        }
        await app.database('categories').where({ id: idCategory }).del();
        return res.status(204).send();
    }

    return { read, save, remove, readById }
}
