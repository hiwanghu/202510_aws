const Product = require('../models/productModel');

// 产品控制器
const productController = {
  // 获取所有产品
  getAllProducts: async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.json({
        status: 'success',
        data: products,
        message: 'Products retrieved successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 根据ID获取产品
  getProductById: async (req, res, next) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      res.json({
        status: 'success',
        data: product,
        message: 'Product retrieved successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 创建产品
  createProduct: async (req, res, next) => {
    try {
      const productData = req.body;
      
      // 基本验证
      if (!productData.name || !productData.price || !productData.category) {
        const error = new Error('Name, price, and category are required');
        error.statusCode = 400;
        throw error;
      }

      const newProduct = await Product.create(productData);
      res.status(201).json({
        status: 'success',
        data: newProduct,
        message: 'Product created successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 更新产品
  updateProduct: async (req, res, next) => {
    try {
      const productId = req.params.id;
      const productData = req.body;

      const updatedProduct = await Product.update(productId, productData);
      res.json({
        status: 'success',
        data: updatedProduct,
        message: 'Product updated successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 删除产品
  deleteProduct: async (req, res, next) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await Product.delete(productId);
      res.json({
        status: 'success',
        data: deletedProduct,
        message: 'Product deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = productController;