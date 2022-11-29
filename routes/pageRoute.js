const express = require('express');
const route = express.Router();


route.get('/', async (req, res)=>{
    res.render('main')
})
route.get('/adduser', (req, res)=>{
    res.render('addUser');
})
route.get('/updateuser/:name/:email/:age/:gender/:status', (req, res)=>{
    const { _id } = req.query;
    const { name, email, age, gender, status } = req.params;

    res.render('updateUser', {
        _id,
        name,
        email,
        age,
        gender,
        status
    });
})
module.exports = route;