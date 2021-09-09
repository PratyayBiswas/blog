const router = require('express').Router();
const Category = require('../models/Category');

// POST
// router.post('/', async (req, res) => {
//     const newCat = new Category(req.body);
//     try {
//         const cat = await newCat.save();
//         res.status(200).json(cat);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

// GET ALL
router.get('/', async (req, res) => {
    try {
        const cat = await Category.find();
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json(error);
    }
    
});

module.exports = router;