const handle = (req, res) =>{
    console.log(req.app.locals.title);
    res.send('I am from homepage');
};

module.exports = handle;