const collection = require("../db/collection");
const {query} =  require("../db/index");

async function getAllBootcampers(){
    const sql = await query(`SELECT * FROM bootcampers ORDER BY score DESC;`);
    return sql.rows
    // return sql.rows
}

async function incrementScore(id){
    //take in id of person 
    const sql = await query(`UPDATE bootcampers SET score = score + 1 WHERE id = ${id};`);
    console.log("updated")
    return "Success!"
    // return sql
}

//get bootcamper by id
async function getBootcampersById(id){
    const res = await query(`SELECT * FROM bootcampers WHERE id = $1;`, [id])
    return res
}

//retrive bootcamper name
async function bootcamperName(value){
    const res = await query(`SELECT player FROM bootcampers WHERE player = $1;`, [value])
}

module.exports = {
    getAllBootcampers,
    incrementScore,
    bootcamperName
}
