const Blog = require('../models/Blog.model');

// Create Blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];
    const blog = new Blog({ title, content, images });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Error creating blog' });
  }
};

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};
