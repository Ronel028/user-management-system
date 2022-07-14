const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "",
    database: "user-management-system"
})

pool.getConnection((error)=>{
    if(error){
        console.log("Error : ", error)
    }else{
        console.log('Database connected');
    }
})

module.exports = pool;