const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {

    //user array
    const users =
        [
            {
                id: 1,
                name: 'John Doe'
            },
            {
                id: 2,
                name: 'Jane Doe'
            }

        ]

    return res.json(users);

});



app.listen(3002, () => {
    console.log('\n Server is running on port 3002');
});