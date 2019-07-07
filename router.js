/*const _ = require('lodash');
const os = require('os');
/*console.log("bonjour node");
var tab = [0,3,5,7,3,12,8,9,10,5,9];
var tabunique = _.uniq(tab);
console.log(tabunique); */
/*var voiture={
    matricule : "14225602",
    couleur : "noire",
    nbrChv : "5"
};
console.log("bonjour " + os.userInfo().username);
console.log(voiture.nbrChv);

console.log('starting app');
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);
setTimeout(() => {
    console.log('Second setTimeout');
}, 0);
console.log('Finishing up');*/

const express = require('express');
const bodyParser = require('body-parser');

const user = require('./controller/userController');
const todo = require('./controller/todoController');


var port = 3000;

var app = express();
app.use(bodyParser.json());

app.use('/user', user);
app.use('/todo', todo);

app.get("/",(req, res)=>{
        res.send("hello from the server");
});

app.listen(port, ()=>{
    console.log("server started");
});