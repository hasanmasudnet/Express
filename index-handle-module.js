const express = require('express');
const handle = require('./handle');
const app = express();

app.locals.title = 'Welcome to my Express';

app.get('/user/:id', handle);



app.listen(3000, () => {
    console.log('listening port 3000');
});