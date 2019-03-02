var mongoose = require('mongoose');
var schema= require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
    
var User=mongoose.model('User2',schema,'users2');

var user= new User({
name:'Jhon Smith',
email:'jhon@smith.io'
});

user.save(function(error){
if(error){
console.log(error);
process.exit(1);
}
console.log("Saved!!");
process.exit(0)
});


//inicializar nom con npm init
//instalar 'mongoose'  con npm i --save mongoose -g