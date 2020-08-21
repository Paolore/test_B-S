const router = require('express').Router();
const task = require('./tasks.route');


router.use('/', task);

module.exports = router;