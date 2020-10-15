//Pulling Pool out of the postgres
const { Pool } = require('pg');
console.log(process.env.PGPORT)
//Creating a new pool(connection) and supplying the db config
const pool = new Pool({
  // host: "ec2-54-216-202-161.eu-west-1.compute.amazonaws.com",
  // database: "d85dvdr2n7cnbj",
  // user: "bdnexinussypzy",
  // port: 5432,
  // password: "6eee54d0a47e3ae5c37dce71e07296b8b453810ef56fcdf6ae66ee5871b75d3b",
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

