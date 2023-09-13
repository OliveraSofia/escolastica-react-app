var pool = require('./DB');

async function getAbm() {
    var query = "select * from materias order by id desc";
    var rows = await pool.query(query);  
    console.log("rows");
    console.log(rows);
    return rows;
  
}

/*
async function getAbm() {
pool.query("select * from materias").then(function(resultados){
    console.log(resultados);
    return resultados;
})};*/
module.exports = { getAbm }
