const router = require('express').Router();
const apiController = require('../controllers/api/apiController');
// const auth = require('../middlewares/authbackend');

// router.post('/signin', adminController.signIn);
router.get('/getProducts', apiController.getProducts);
router.get('/getProductDetails/:id', apiController.getProductDetails);
module.exports = router;