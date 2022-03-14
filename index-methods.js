const express = require('express');
const app = express();


//Content-Type:application/json
//{ name: 'Bangladesh' }
//app.use(express.json());

//Content-Type:application/octet-stream
//<Buffer 7b 0d 0a 20 20 20 20 22 6e 61 6d 65 22 3a 22 42 61 6e 67 6c 61 64 65 73 68 22 0d 0a 7d>
//app.use(express.raw());


//Content-Type:text/plain
//Name=Bangladesh&Age=50
//app.use(express.text());

//Content-Type:application/x-www-form-urlencoded
//{ Name: 'Bangladesh', Age: '50' }
//app.use(express.urlencoded());

//GET
//Content-Type:application/x-www-form-urlencoded
//http://localhost:3000/text/text.txt
//Getting access of static resources
//2nd param is Options
// app.use(express.static(`${__dirname}/public/`, {
//     index:home.html
// }));

const router = express.Router({
    caseSensitive:true,   
});
app.use(router);


app.get('/', (req,res) => {
    console.log(req.body);
    res.send('This is Homepage from GET request');
});
router.get('/about', (req,res) => {
    console.log(req.body);
    res.send('This is About from GET request');
});

app.post('/', (req,res) => {
    console.log(req.body);
    res.send(`This is homepage from POST Request and response is ${req.body.name}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
