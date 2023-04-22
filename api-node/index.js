const express = require('express');
const app = express();


app.get('/users', (req, res) =>{
    return res.json({msg: 'User'});

});

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});