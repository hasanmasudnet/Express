const express = require('express');
const app = express();

app.route('/about/mission/')
    .get((req, res) => {
        res.send('I am get');
    })
    .post((req, res) => {
        res.send('I am post');
    })
    .put((req, res) => {
        res.send('I am put');
    });



app.listen(3000, () => {
    console.log('Listing Post 3000');
});