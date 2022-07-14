
const mongoose = require('mongoose');

function mongooseConnect(){
    mongoose.connect('mongodb+srv://shujihanma:ronelflorida028@cluster0.m2v6u.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: 'true',
        useUnifiedTopology: 'true'
    }, function(error){
        if(error) throw error;
        console.log('connected to mongoDB Atlas')
    })
}

module.exports = mongooseConnect;
