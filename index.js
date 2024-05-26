const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require("path");
const port = 3004
const ejs = require("ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));  //Ovo je najnovije dodano

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const Users = require("./routes/userRouter");
const Noitfications = require("./routes/obavijestRouter");

app.get('/', (request, response) => 
  //response.render('index',{Users:Users}));
  response.render('index'));
/*app.get('/notifications', (request, response) =>    //Novo dodano
    response.render('notifications'));*/

app.get('/addUser', (request, response) =>    //Novo dodano
    response.render('addUser'));  

app.get('/deleteUser', (request, response) =>    //Novo dodano
    response.render('deleteUser'));  

app.get('/editUser', (request, response) =>    //Novo dodano
    response.render('editUser')); 
    



app.use(Users);
app.use(Noitfications);
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})