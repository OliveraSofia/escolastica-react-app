var express = require('express');
var router = express.Router();

var usuarioModel = require('./../../models/usuariosModel');


/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login' ,{layout: 'admin/layout'}
  );
    
});

router.post('/', async function(req, res, next) {
 try {
var usuario = req.body.usuario; //flavia
var clave = req.body.clave; //1234

var data = await usuarioModel.getUserData(usuario,clave);

if (data != undefined){
 req.session.id_usuario = data.id;
  req.session.nombre = data.usuario;
  res.render('admin/abm');
} else {
  res.render('admin/login'
 , {layout: 'admin/layout', 
  error: true}
 )
}
}catch (error){
console.log(error);
}
});
module.exports = router;



