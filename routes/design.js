const router = require('express').Router();
const designController = require('../controllers/designController');
const auth = require('../middlewares/authbackend');
const {uploadImage, updateImage, deleteImage} = require('../middlewares/uploadS3');

router.use(auth);
router.post('/add', uploadImage, designController.addDesign);
router.put('/', updateImage, designController.editDesign);
router.delete('/:id', deleteImage, designController.deleteDesign);

module.exports = router;