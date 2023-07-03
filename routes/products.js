var express = require('express');
var router = express.Router();
const {ProductController} = require('../controllers/ProductController');
const ProductORM = require('../models/productORM');

/* GET Product listing. */
router.get('/:id', ProductController.getProductById);

router.get('/', async (req,res) => {

    const searchProduct = await ProductORM.findAll()

    return res.render('products', {product:searchProduct})
});

module.exports = router;
