const router = require('express').Router();
const productController = require('../controllers/productController');
const {uploadMultiple, upload} = require('../middlewares/multer');
const auth = require('../middlewares/authbackend');

router.use(auth);
router.get('/showImage/:id', productController.showImageProduct);

module.exports = router;