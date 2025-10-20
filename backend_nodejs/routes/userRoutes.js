const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 用户路由
router.get('/', userController.getAllUsers);           // 获取所有用户
router.get('/:id', userController.getUserById);        // 根据ID获取用户
router.post('/', userController.createUser);           // 创建用户
router.put('/:id', userController.updateUser);         // 更新用户
router.delete('/:id', userController.deleteUser);      // 删除用户

module.exports = router;