var express = require('express');
var router = express.Router();

var usuarioModel = require('./../../models/usuariosModel') ;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login'
 // ,{layout: 'admin/layout'}
  );
    
});

router.post('/', async function(req, res, next) {
 try {
var usuario = req.body.usuario;
var clave = req.body.clave;
var data = await usuarioModel.getUserData(usuario,clave);

if (data != undefined){
  req.session.id_usuario = data.id;
  req.session.nombre = data.usuario;
  res.render('admin/novedades');
} else {
  res.render('admin/login'
 // ,{layout: 'admin/layout', error: true    }
 );
}
}catch (error){
console.log(error);
}
});
module.exports = router;



