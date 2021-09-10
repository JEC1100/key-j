const express = require('express'),
router = express.Router(),
root = require('../controllers/root_controller');

router.post('/', root.root);

module.exports = router;