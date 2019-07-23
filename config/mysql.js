let mysql = require('mysql');
let dbConfig = require("./db");
let connection = mysql.createConnection(dbConfig);
function connectDB() {
    connection.connect();
}
module.exports = { connectDB, connection };
