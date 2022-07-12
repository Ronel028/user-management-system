
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

// serve static files
app.use('/style', express.static(path.join(__dirname, './public/compiledCss')))
app.use('/script', express.static(path.join(__dirname, './public/script')))

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// template engine
app.set('view engine', 'ejs')

// routes
app.use('/', require('./routes/pages/pageRoute'));

app.listen(PORT, ()=>{
    console.log('Server Started')
})