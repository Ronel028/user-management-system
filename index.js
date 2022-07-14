
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();

// serve static files
app.use('/style', express.static(path.join(__dirname, './public/compiledCss')))
app.use('/script', express.static(path.join(__dirname, './public/js')))

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// template engine
app.set('view engine', 'ejs')

// database connection
const connectionDB = require('./database/connection');
connectionDB;

// routes
app.use('/', require('./routes/pageRoute'));
app.use('/service', require('./routes/serviceRoute'));

app.listen(PORT, ()=>{
    console.log('Server Started')
})