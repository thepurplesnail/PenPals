var express = require('express');
var router = express.Router();

// redirect route set: /project
router.get('/', function(req, res) {
    res.redirect('/project');
});

module.exports = router;