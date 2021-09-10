const express = require('express'),
router = express.Router(),
root = require('../controllers/root_controller');

router.get('/', root.root);

module.exports = router;