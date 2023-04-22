const express = require('express');
const app = express();


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

    return res.json(user);

});



app.listen(3000, () => {
    console.log('\n Server is running on port 3000');
});