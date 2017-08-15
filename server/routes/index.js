const express = require('express');
const router = express.Router();

router.use("/test", require('./TestRouter.js'));

module.exports = router;
