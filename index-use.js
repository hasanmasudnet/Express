const express = require('express');
const app = express();
const router = express.Router();
//app.use(express.json());
//app.use(express.raw());
//app.use(express.text());
//app.use(express.urlencoded());
app.use(express.static(`${__dirname}/public/`)); //making the directory public
app.use(router);

router.get('/', (req, res) => 
{   
    res.send('This is home page yes');
}
);
router.get('/about', (req, res) => 
{   
    res.send('This is About page yes');
}
);

router.post('/', (req, res) => 
{
    //console.log(req.body.name);
    console.log(req.body);

    res.send('This is home page with post request');
}
);

app.listen(3000, () => {
    console.log('Running from port 3000');
});