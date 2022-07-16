
const express = require('express');
const router = express.Router();

// import services
const userData = require('../database/services/viewUser');
const insertUser = require('../database/services/insertUser');
const deleteUser = require('../database/services/delete');

// view user data from mongoDB database
router.get('/viewuserdata', async function(req, res){
    try {
        const user = await userData();
        console.log(user.length)
        res.json(user) 
        
        
    } catch (error) {
        res.json({
            error: error,
            message: 'Fetching data failed'
        })
    }
})

// insert user data
router.post('/insertuser', async function(req, res){

    const { name, email, age, gender, status } = req.body;
    const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', dateFormat)

    try {
        const data = await insertUser(name, email, age, gender, status, date);
        res.json({
            message: "Save Successfull"
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            message: "Save Failed"
        })
    }

})

// delete user data
router.delete('/deleteuser', async function(req, res){
    let { _id } = req.query;
    try {
        const userDel = await deleteUser(_id)
        console.log(userDel)
        res.json({
            status: 'ok'
        })
    } catch (error) {
        res.json({
            status: 'Error'
        })
    }
})

module.exports = router;