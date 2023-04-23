const express = require('express');
const app = express();
app.use(express.json());
const consign = require('consign');

consign()
    .then("./api")
    .then("./routes/routes.js")
    .into(app)


app.listen(3002, () => {
    console.log('\n Server is running on port 3002');
});



//app.get('/users', (req, res) => {
//     //user array
//     const users =
//         [
//             {
//                 id: 1,
//                 name: 'John Doe'
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe'
//             }

//         ]

//     return res.json(users);

// });
// /**
//  * GET /users by id
//  */
// app.get('/users/:id', (req, res) => {

//     //extract all user's requirements from DOM to database
//     const idUsers = req.params
//     return res.json(idUsers);

// });

// /**
//  * POST /users by id
//  */

// app.post('/users', (req, res) => {

//     //extract all user's requirements from DOM to database
//     const users = { ...req.body };
//     return res.json(users);

// });

// /**
//  * PUT /users by id
//  */

// app.put('/users/:id', (req, res) => {

//     /**
//         Put all user's requirements from DOM to database.
//     */
//     const idUser = req.params;
//     const users = { ...req.body };
//     return res.json(users);

// });

// /**
//  * DELETE /users by id
//  */

// app.delete('/users/:id', (req, res) => {

//     /**
//         deleting all user's propriety from database
//     */
//     const idUsers = req.params;
//     return res.json(idUsers);

// });

// /**
//  * Lists all users in the database to localhost
//  */

