const express =  require("express");
const { router } = require("./routes/bootcampers");
const port = 5000;

//Initialise app by line 2
const app = express();

//To fix cors error
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
//Add middleware to serve files in public folder
app.use(express.static("public"))

//Require our router from roots/bootcampers

//use getAllBootcampers() to return all bootcampers when btnretrive is clicked
//When btnRetrieve is clicked, send a get request to '/bootcampers'
//When btnRetrieve is clicked inner html the table from heroku ???
//Get heroku data as json to work with it as an api. We can do this by getting the routes

//hand the router to app
app.use('/bootcampers', router)

//make app lister on port
app.listen(port, function (){
    console.log(`Listenting on port ${port}`)
})
