const router = require('express').Router();
const educationController = require('../controllers/educationController');
const auth = require('../middlewares/authbackend');

router.use(auth);
router.post('/add', educationController.addEducation);
router.put('/', educationController.editEducation);
router.delete('/:id', educationController.deleteEducation);

module.exports = router;