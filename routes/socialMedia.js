const router = require('express').Router();
const socialMediaController = require('../controllers/socialMediaController');
const {upload} = require('../middlewares/multer');
const auth = require('../middlewares/authbackend');

router.use(auth);
router.post('/', upload, socialMediaController.addSocialMedia);
router.put('/', upload, socialMediaController.editSocialMedia);
router.delete('/:id', socialMediaController.deleteSocialMedia);

module.exports = router;