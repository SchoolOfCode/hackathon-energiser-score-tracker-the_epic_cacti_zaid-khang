const { query } = require('../index')

async function createTable(){
    let res = await query(
        `CREATE TABLE cohort_4 (
            id SERIAL PRIMARY KEY,
            player TEXT,
            score INTEGER,
            imageUrl TEXT
        )`
    )
    console.log(res);
}

createTable();