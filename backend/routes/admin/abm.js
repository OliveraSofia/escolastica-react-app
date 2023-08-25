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

module.exports = router;