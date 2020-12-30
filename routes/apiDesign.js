const router = require('express').Router();
const apiDesignController = require('../controllers/api/apiDesignController');

router.get('/getDesign', apiDesignController.getDesign);
module.exports = router;