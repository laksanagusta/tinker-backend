const router = require('express').Router();
const experienceController = require('../controllers/experienceController');
const auth = require('../middlewares/authbackend');

router.use(auth);
router.post('/add', experienceController.addExperience);
router.put('/', experienceController.editExperience);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;