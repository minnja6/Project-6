//requiring express and data.json, setting pug to the view engine
var express = require('express');
var app = express(); 
var data = require('./data.json');
app.set('view engine', 'pug');
//setting the route to the index/home page
app.get('/', (req, res) =>{
    res.render('index', {projects:data.projects}); 
});
//setting the route to the about page 
app.get('/about', (req, res) =>{
     res.render('about'); 
});
//routing to the projects array and rendering the project page
app.get('/projects/:id', (req, res) =>{
    res.render('project', {
        project: data.projects[req.params.id - 1],
        id: req.params.id
    }); 
});
app.use('/static', express.static('public'));

//catching the error and forwarding it to the error handler
 app.use((req, res, next) => {
    const err=new Error("Sorry,this page doesn't exist!");
    err.status=404;
    next(err);
 });
  //error handler 
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error', err);
    console.log("Sorry,this page doesn't exist!");
      });
//listening on port 3000
 app.listen(3000, () => {
 console.log('App listening on port 3000')});
