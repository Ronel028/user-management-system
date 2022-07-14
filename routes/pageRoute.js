
const express = require('express');
const route = express.Router();

const viewUser = require('../database/services/viewUser');

route.get('/', async (req, res)=>{
    try {
        const userData = await viewUser();
        res.render('main', { data: userData })
    } catch (error) {
        res.json(error)
    }
    
})
route.get('/adduser', (req, res)=>{
    res.render('addUser');
})
route.get('/updateuser', (req, res)=>{
    res.render('updateUser');
})
module.exports = route;