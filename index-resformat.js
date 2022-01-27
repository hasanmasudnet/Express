const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  
  //set cookie
  res.cookie('name','Masud Hasan Test');
  
  res.format({
    'text/plain': () => {
      res.send('Hello Welcome Text');
    },
    'text/html': () => {
      res.render('pages/response',{
        title:"this is test title of page",
        country:"Bangladesh"
      });
    },
    'application/json': () => {
      res.json({
        type:'jsondata'
      });
    },
    default: () => {

      res.status(406).send('Not Acceptable');

    }
  });

});





app.listen(3000, () => {
console.log('I am opening on port 3030');
});