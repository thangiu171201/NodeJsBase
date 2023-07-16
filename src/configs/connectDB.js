// get the client
// const mysql = require("mysql2");
import { query } from "express";
import mysql from "mysql2/promise";

console.log(">>check connect");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "nodejsbasic",
});

// create the connection to database
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "nodejsbasic",
//     password: "",
// });
// const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
// simple query
// connection.query("SELECT * FROM `user` ", function (err, results, fields) {
//     console.log("check DB");
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => {
//         return row;
//     });
//     console.log(rows); // results contains rows returned by server
// });

export default pool;
