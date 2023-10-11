var express = require('express');
var router = express.Router();
var abmModel = require('../../models/abmModel')

/* GET users listing. */
router.get('/', async function (req, res) {
  var abm = await abmModel.getAbm();
  res.render('admin/abm', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    abm

  });
});

router.post('/save', async (req, res) =>{ 
  var add = await abmModel.addSignature(req.body);
  console.log("guardar")
  try{
    if(
    req.body.curso_id != "" && 
    req.body.nombre_materia != "" &&
     req.body.descripcion_materia != "" &&
     req.body.profesor_materia != "" &&
     req.body.horario_materia != "" &&
     req.body.aula != ""){
   add
   res.redirect('http://localhost:3000/admin/abm');
  }
  else{ error: true, message='Complete el formulario';} 
  }catch(error){
console.log(error)
error:true, message='Error al cargar'}
 });


module.exports = router;