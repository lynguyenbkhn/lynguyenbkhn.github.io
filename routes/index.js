var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.ejs', { title: 'Express' });
// });

// router.get('/te', function(req, res, next) {
//   res.render('test');
// });

router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/*.:idsanpham', function(req, res, next) {
  var idsp = req.params.idsanpham; 
  if(!req.session.sanphamdaxem){
    req.session.sanphamdaxem = [] ; 
  }
  if(req.session.sanphamdaxem.indexOf(idsp) == -1)
  { 
      req.session.sanphamdaxem.push(idsp); 
  }
  res.render('san-pham-chi-tiet',{idsanpham:req.params.idsanpham,danhsach:req.session.sanphamdaxem});
});

router.get('/sanpham', function(req, res, next) {
  res.render('sanpham');
});



module.exports = router;
