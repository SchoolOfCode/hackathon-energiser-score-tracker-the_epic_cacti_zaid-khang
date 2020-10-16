const collection = require("../db/collection");
const {query} =  require("../db/index");

async function getAllBootcampers(){
    const sql = await query(`SELECT * FROM cohort_4`);
    return sql.rows
}

async function incrementScore(id){
    //take in id of person 
    const sql = await query(`UPDATE cohort_4 SET score = score + 1 WHERE id = ${id};`);
    console.log("updated")
    return "Success!"
    // return sql
}

//get bootcamper by id
async function getBootcampersById(id){
    const res = await query(`SELECT * FROM cohort_4 WHERE id = $1`, [id])
    return res
}

module.exports = {
    getAllBootcampers,
    incrementScore
}
