//Pulling Pool out of the postgres
const { Pool } = require('pg');
console.log(process.env.PGPORT)
//Creating a new pool(connection) and supplying the db config
const pool = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
});

//Export the pool connection
module.exports = {
    query: (sql, value, cb) => {
        return pool.query(sql, value, cb)
    }
}

