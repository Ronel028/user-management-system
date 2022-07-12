
const express = require('express');
const route = express.Router();


route.get('/', (req, res)=>{
    res.render('main')
})
route.get('/adduser', (req, res)=>{
    res.render('addUser');
})
route.get('/updateuser', (req, res)=>{
    res.render('updateUser');
})
module.exports = route;