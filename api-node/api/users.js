module.exports = () => {

    const get = (req, res) => {
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
    
    return { get };
}