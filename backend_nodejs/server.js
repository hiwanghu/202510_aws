const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

// 加载环境变量
dotenv.config();

// 导入路由
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// 初始化Express应用
const app = express();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 基础路由
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node.js RESTful API',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// API路由
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// 错误处理中间件
app.use(errorHandler);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;