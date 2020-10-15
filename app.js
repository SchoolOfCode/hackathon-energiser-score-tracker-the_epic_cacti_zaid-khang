const express =  require("express");
const { router } = require("./routes/bootcampers");
const port = 5000;

//Initialise app by line 2
const app = express();

//Require our router from roots/bootcampers

//hand the router to app
app.use('/bootcampers', router)

//make app lister on port
app.listen(port, function (){
    console.log(`Listenting on port ${port}`)
})
