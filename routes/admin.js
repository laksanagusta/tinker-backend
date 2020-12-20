const router = require('express').Router();
const adminController = require('../controllers/adminController');
const auth = require('../middlewares/authbackend');

router.post('/signin', adminController.signIn);
router.get('/signin', adminController.viewSignIn);
router.get('/signup', adminController.viewSignUp);
router.post('/', adminController.signUp);
router.use(auth);
router.get('/logout', adminController.logout);
router.get('/dashboard', adminController.viewDashboard);
router.get('/bank', adminController.viewBank);
router.get('/product', adminController.viewProduct);
router.get('/user', adminController.viewUser);
router.get('/socialMedia', adminController.viewSocialMedia);
router.get('/education', adminController.viewEducation);
router.get('/experience', adminController.viewExperience);

module.exports = router;