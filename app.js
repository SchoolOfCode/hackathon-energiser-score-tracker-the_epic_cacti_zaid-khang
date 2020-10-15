const express =  require("express");
const { router } = require("./routes/bootcampers");
// const {query} =  require("./db/index");
const port = 5000;
// const {
//     getAllBootcampers,
//     incrementScore
// } = require("./models/bootcampers")

//Initialise app by line 2
const app = express();

//To fix cors error
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  

//Require our router from roots/bootcampers

//hand the router to app
app.use('/bootcampers', router)

// incrementScore();

//make app lister on port
app.listen(port, function (){
    console.log(`Listenting on port ${port}`)
})
