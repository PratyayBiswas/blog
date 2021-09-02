const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// CREATE
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username == req.body.username) {
            
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id,
                    { $set: req.body },
                    { new: true }
                );
                res.status(200).json(updatePost);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else {
            res.status(401).json("Only creater of this post can update!");
        }

    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username == req.body.username) {
            
            try {
                await post.delete();
                res.status(200).json("Post has been deleted!");
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else {
            res.status(401).json("Only creater of this post can delete!");
        }

    } catch (error) {
        res.status(500).json(error);
    }
});

// GET
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;