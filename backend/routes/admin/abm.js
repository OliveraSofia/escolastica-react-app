var express = require('express');
var router = express.Router();
var abmModel = require('../../models/abmModel')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var abm = await abmModel.getAbm();
  res.render('admin/abm', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    abm

  }); console.log(usuario); console.log("abm"); 
});

module.exports = router;