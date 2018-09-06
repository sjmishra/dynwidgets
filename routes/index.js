var express = require('express');
var router = express.Router();
var apiwrapper = require('./api/apiwrapper')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('home',{title:'DynWidgets',name: 'Dev M'})
})


router.get('/admin', function (req, res) {
  res.render('admin',{title:'DynWidgets',name: 'Dev M'})
})

router.get('/greetings/:name', function (req, res) {
  var name = req.params.name;
  res.render('greetings', {name: name});
})

router.get('/api/widgets',apiwrapper.getallwidgets)

router.post('/api/widgets/add',apiwrapper.addwidget)

router.post('/api/widgets/:id',apiwrapper.editwidget)

module.exports = router;