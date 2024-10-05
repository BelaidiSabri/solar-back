const express = require('express');
const { createService, getServices } = require('../controllers/ServicesCtrl');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();
const upload = require('../middlewares/multer');

router.post('/', protect, upload.array('images', 5), createService);
router.get('/', getServices);

module.exports = router;
