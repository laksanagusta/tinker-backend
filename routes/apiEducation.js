const router = require('express').Router();
const apiEducationController = require('../controllers/api/apiEducationController');

router.get('/getEducation', apiEducationController.getEducation);
module.exports = router;