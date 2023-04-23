module.exports = () => {
    /**
     * Creation of the Save Method to record the user's insertions into the database.
     */
    const save = (req, res) => {
        const category = { ...req.body };

        if (!category.name) {
            return res.status(400).json({ error: "Nome não informado" });
        }

        category.image = "category.png";

        return res.json(category)

    }


    return { save };
}