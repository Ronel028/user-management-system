
const express = require('express');
const router = express.Router();

// import services
const insertUser = require('../database/services/insertUser');

// insert user data
router.post('/insertuser', async function(req, res){

    const { name, email, age, gender, status } = req.body;
    const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', dateFormat)
    try {
        await insertUser(name, email, age, gender, status, date);
        res.json({
            message: "Save Successfull"
        })
        
    } catch (error) {
        res.json({
            message: "Save Failed"
        })
    }

})

module.exports = router;