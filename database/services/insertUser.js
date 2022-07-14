
const connectionDB = require('../schema');

async function insertUser(name, email, age, gender, status, date){

    return new Promise((resolve, reject)=>{
        connectionDB.create({
            name: name, 
            email: email,
            age: age,
            gender: gender,
            status: status,
            date: date
        }, function(error, result){
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })

}

module.exports = insertUser;