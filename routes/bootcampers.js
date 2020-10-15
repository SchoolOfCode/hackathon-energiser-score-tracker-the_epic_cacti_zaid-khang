const express =  require("express");
const {
    getAllBootcampers,
    incrementScore
} = require("../models/bootcampers");
//require functions from bootcampers model --------

//make a router     express.Router    call that function
const router = express.Router();

//add listeners to router (router.get...)
router.get('/', async function (req, res){
    incrementScore()
    res.json("We're masters")
})

//export the router
module.exports = {
    router
}