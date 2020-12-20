const router = require('express').Router();
const apiSocialMediaController = require('../controllers/api/apiSocialMediaController');

router.get('/getSocialMedia', apiSocialMediaController.getSocialMedia);
module.exports = router;