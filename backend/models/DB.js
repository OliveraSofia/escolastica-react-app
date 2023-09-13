var mysql = require('mysql');
var util = require('node:util');

var pool = mysql.createPool({
connectionLimit: 10,
host: 'localhost',
user: 'root',
password: 'ganeshA84.',
database: 'escolastica'
});



pool.query = util.promisify(pool.query);
module.exports = pool;