
const connectionDB = require('../connection');

function insertUser(name, email, age, gender, status, date){

    return new Promise((resolve, reject)=>{
        const insertQuery = `INSERT INTO user_table (name, email, age, gender, status, date)
                             VALUES (?, ?, ?, ?, ?, ?)`;
        connectionDB.query(insertQuery, [name, email, age, gender, status, date], (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result);
            }
        })
    })

}

module.exports = insertUser;