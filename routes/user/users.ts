var express = require('express');
var router = express.Router();
const userHandler = require('./handler');

/* GET users listing. */
router.get('/', userHandler.list);
router.get('/:id', userHandler.get);
router.post('/', userHandler.create);
router.post('/:id', userHandler.update);

module.exports = router;
