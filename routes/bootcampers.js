const express =  require("express");
const {
    getAllBootcampers,
    incrementScore,
    bootcamperName
} = require("../models/bootcampers");
//require functions from bootcampers model --------

//make a router     express.Router    call that function
const router = express.Router();

//This is where we want to call upon getAllBootcampers() and translate it into a JSON
router.get('/', async function (req, res){
    const bootcampers = await getAllBootcampers()
    res.json({ success: true, payload: bootcampers });
})

//match name from html to db
router.patch("/:id", function (req, res) {
    const id = req.params.id;
    incrementScore(id);
    return res.json({success: true})
})


//export the router
module.exports = {
    router
}