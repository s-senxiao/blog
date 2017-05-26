var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/classify', {
    title: '分类',
    classify: [
      {category: 'html'},
      {category: 'css'},
      {category: 'js'}
    ]

  });
});

module.exports = router;
