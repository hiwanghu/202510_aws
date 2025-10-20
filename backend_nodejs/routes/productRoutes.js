const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// 产品路由
router.get('/', productController.getAllProducts);           // 获取所有产品
router.get('/:id', productController.getProductById);        // 根据ID获取产品
router.post('/', productController.createProduct);           // 创建产品
router.put('/:id', productController.updateProduct);         // 更新产品
router.delete('/:id', productController.deleteProduct);      // 删除产品

module.exports = router;