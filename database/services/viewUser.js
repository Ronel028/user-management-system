
const connectionDB = require('../schema');

function viewUser(){

    return new Promise((resolve, reject)=>{

        connectionDB.find({}, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result);
            }
        })
    })

}

module.exports = viewUser;