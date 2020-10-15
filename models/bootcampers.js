const collection = require("../db/collection");
const {query} =  require("../index");

async function getAll(){
    const sql = await query(`SELECT * FROM bootcampers`);
    console.log(sql)
}

module.exports = {
    getAll,
}
