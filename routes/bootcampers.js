const express =  require("express");
//require functions from bootcampers model --------

//make a router     express.Router    call that function
const router = express.Router();

//add listeners to router (router.get...)
router.get('/', async function (req, res){
    res.json("We're masters")
})

//export the router
module.exports = {
    router
}