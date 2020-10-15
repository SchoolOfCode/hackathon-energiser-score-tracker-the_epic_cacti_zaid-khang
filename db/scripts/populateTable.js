const {query} =  require("../index")
let myModule = require("../collection")
let collection = myModule.cohort_4

// console.log(collection);




async function populateTable() {
    const sql = 
    `INSERT INTO cohort_4 (players, score) VALUES ($1, $2)`;
    collection.map(async function(value) {
        let res = await query(sql, [value.players, value.score])
        console.log(res)
    }) 
}

populateTable();