var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');


/* GET login page. 
router.get('/', function ( req, res, next) {
  res.redirect('admin/abm', { layout: 'admin/layout' }
  );

});*/

router.post('/', async function(req, res, next) {
  try {
    var usuario = req.body.usuario; //flavia
    var clave = req.body.clave; //1234

    var data = await usuariosModel.getUserData(usuario, clave);

    if (data != undefined) {
       
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('http://localhost:3000/admin/abm');
    } else {
      res.render('admin/login'
     ,
           console.log("loguin")
        , {
          layout: 'admin/layout',
          error: true
        }
      )
    }
  } catch (error) {
    console.log(error);
  }
});


router.get('/logout', function (req, res) {
  req.session.destroy();
  res.render('admin/login', { layout: 'admin/layout' }
  );

});

module.exports = router;



