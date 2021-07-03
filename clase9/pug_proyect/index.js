const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/about', (req, res) =>{
    res.render('about', {title:'About', message:'Estas viendo la pagina de about'});
})

app.listen(3501);