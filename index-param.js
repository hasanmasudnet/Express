const express = require('express');
const app = express();


app.param('id',(req, res, next, id) => {
    const user = {
        'userid':id,
        'username':'Bangladesh'
    };
    req.userDetails = user;
    console.log('I am middleware');
   next();
});

app.get('/user/:id', (req,res) => {
res.send(req.userDetails); 
});

app.listen(3000, () =>{
    console.log('Starting from 3000');
});