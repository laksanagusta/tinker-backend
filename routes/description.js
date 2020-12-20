const router = require('express').Router();
const descriptionController = require('../controllers/descriptionController');
const {uploadMultiple, upload} = require('../middlewares/multer');
const auth = require('../middlewares/authbackend');

router.use(auth);
router.post('/add', upload, descriptionController.addDescription);
router.put('/', upload, descriptionController.editDescription);

module.exports = router;