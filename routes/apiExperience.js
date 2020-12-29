const router = require('express').Router();
const apiExperienceController = require('../controllers/api/apiExperienceController');

router.get('/getExperience', apiExperienceController.getExperience);
module.exports = router;