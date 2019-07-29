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

app.get('/projects', (req, res) =>{
    res.render('project', {projects:data.projects}); 
});
app.use('/static', express.static('public'));
//app.use((req, res, next) => {
//res.locals = data;
//next();
 //});

 app.listen(3000, () => {
 console.log('App listening on port 3000')});
