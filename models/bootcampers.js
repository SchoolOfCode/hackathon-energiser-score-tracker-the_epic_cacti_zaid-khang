const collection = require("../db/collection");
const {query} =  require("../index");

async function getAllBootcampers(){
    const sql = await query(`SELECT * FROM bootcampers`);
    return sql.rows
}

async function 

module.exports = {
    getAllBootcampers,
}
