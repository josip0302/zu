const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require("path");
const port = 3000
const ejs = require("ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

const Users = require("./routes/userRouter");

//app.get('/', (request, response) => 
  //response.render('index',{Users:Users}));



app.use("/v1/", Users);
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})