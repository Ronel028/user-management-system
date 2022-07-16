

const connectionDB = require('../schema');

function updateUser(id, name, email, age, gender, status){

    return new Promise((resolve, reject)=>{

        connectionDB.updateOne({_id: id}, {
            $set: {
                name: name,
                email: email,
                age: age,
                gender: gender,
                status: status
            }
        }, function(error, result){
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })

}

module.exports = updateUser;