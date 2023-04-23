module.exports = () => {

    /**
     *  Creation of the route to use the GET method and list the added users.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    const list = (req, res) => {
        const users = [
            {
                id: 1,
                name: 'John Doe',
                email: 'kenaa@example.com',
                password: '123456'
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'kenaa@example.com',
                password: '123456'
            }
        ];
        return res.json(users);
    }
    /**
     * Creation of the Save Method to record the user's insertions into the database.
     */
    const save = (req, res) => {
        const users = { ...req.body };
        return res.json(users)

    }


    return { list ,save };
}