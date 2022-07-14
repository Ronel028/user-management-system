
const connectionDB = require('../connection');

function viewUser(){

    return new Promise((resolve, reject)=>{
        const viewQuery = `SELECT * FROM user_table`;
        connectionDB.query(viewQuery, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result);
            }
        })
    })

}

module.exports = viewUser;