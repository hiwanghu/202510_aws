const User = require('../models/userModel');

// 用户控制器
const userController = {
  // 获取所有用户
  getAllUsers : async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json({
        status: 'success',
        data: users,
        message: 'Users retrieved successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 根据ID获取用户
  getUserById: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      res.json({
        status: 'success',
        data: user,
        message: 'User retrieved successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 创建用户
  createUser: async (req, res, next) => {
    try {
      const userData = req.body;
      
      // 基本验证
      if (!userData.name || !userData.email) {
        const error = new Error('Name and email are required');
        error.statusCode = 400;
        throw error;
      }

      const newUser = await User.create(userData);
      res.status(201).json({
        status: 'success',
        data: newUser,
        message: 'User created successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 更新用户
  updateUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const userData = req.body;

      const updatedUser = await User.update(userId, userData);
      res.json({
        status: 'success',
        data: updatedUser,
        message: 'User updated successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // 删除用户
  deleteUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.delete(userId);
      res.json({
        status: 'success',
        data: deletedUser,
        message: 'User deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = userController;