var express = require('express');
var app = express(); 
var data = require('./data.json');
app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    res.render('index', {projects:data.projects}); 
});

app.get('/about', (req, res) =>{
     res.render('about'); 
});

app.get('/projects/:id', (req, res) =>{
    res.render('project', {
        project: data.projects[req.params.id - 1],
        id: req.params.id
    }); 
});
app.use('/static', express.static('public'));


//catching the error and forwarding it to the error handler
// app.use((req, res, next) => {
// next(createError(404));
//  });
//  //error handler 
//  app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {}
//      });

     //res.status(err.status || 500);
     //res.render('error');

 app.listen(3000, () => {
 console.log('App listening on port 3000')});
