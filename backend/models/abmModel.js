var pool = require('./DB');

async function getAbm() {
    var query = "select * from materias order by id desc";
    var rows = await pool.query(query);  
    return rows;
  
}


async function addSignature(obj) {
try{
var query = "insert into materias set ? ";
var rows = await pool.query(query,[obj]); 
console.log("add");
return rows;
}catch (error) {
    console.log(error)
    throw error;
};
};



module.exports = { getAbm , addSignature }
