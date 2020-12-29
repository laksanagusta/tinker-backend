const router = require('express').Router();
const descriptionController = require('../controllers/descriptionController');
const {uploadImage, updateImage, deleteImage} = require('../middlewares/uploadS3');
const auth = require('../middlewares/authbackend');

router.use(auth);
router.post('/add', uploadImage, descriptionController.addDescription);
router.put('/', updateImage, descriptionController.editDescription);
router.delete('/:id/image/:imageurl', deleteImage, descriptionController.deleteDescription);

module.exports = router;