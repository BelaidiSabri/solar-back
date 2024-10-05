const express = require('express');
const { createBlog, getBlogs } = require('../controllers/BlogCtrl');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();
const upload = require('../middlewares/multer');
router.post('/', protect, upload.array('images', 5), createBlog);
router.get('/', getBlogs);

module.exports = router;
