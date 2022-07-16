
const connectionDB = require('../schema');

async function deleteUser(id){

    return new Promise((resolve, reject)=>{
        connectionDB.deleteOne({
            _id: id
        }, function(error, result){
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })

}

module.exports = deleteUser;