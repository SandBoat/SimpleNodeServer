var express = require('express');
var router = express.Router();
var sql = require('../lowdb/sql');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('数据服务');
});

router.get('/get', function (req, res, next) {
  res.send(sql.getTodoList());
});

router.post('/set', function (req, res, next) {
  sql.addTodo({
    time: Date.now(),
    msg: '做点什么····',
  })
  res.send(sql.getTodoList());
});

module.exports = router;