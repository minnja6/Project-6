const express = require('express');
const app = express(); 
//const Routes = require('./routes/index');
const data = require('./data.json');


app.set('view engine', 'pug');

app.use(express.static('public'));
app.use((req, res, next) => {
    res.locals = data;
    next();
});

app.use('/', Routes);
app.use('/about', Routes.about);
app.use('/projects?', Routes.project);
//app.use(Routes.fallback);
app.use

// app.get('/', (request, response) =>{
//     response.send('I love treehouse!');
// });

 app.listen(3000, () => console.log('App listening on port 3000'));
