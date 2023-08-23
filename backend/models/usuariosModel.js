var pool = require('./DB');
var md5 = require('md5');


async function getUserData(usuario,clave){
    try{
var query = "select * from usuarios where usuario = ? and clave = ? limit 1";
var rows = await pool.query(query, [usuario, md5(clave)]);
return rows[0];
 } catch (error) {
    console.log(error);
 }
}


module.exports = { getUserData }