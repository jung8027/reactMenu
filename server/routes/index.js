const express = require('express');
const router = express.Router();

router.use('/test', require('./TestRouter.js'));
router.use('/user', require('./UserRouter.js'));

module.exports = router;
