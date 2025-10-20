// 数据库配置（模拟）
const config = {
  development: {
    host: 'localhost',
    port: 27017,
    database: 'node_api_dev'
  },
  production: {
    host: 'prod-db-host',
    port: 27017,
    database: 'node_api_prod'
  }
};

const currentEnv = process.env.NODE_ENV || 'development';
const dbConfig = config[currentEnv];

// 模拟数据库连接
const connectDatabase = () => {
  console.log(`Connecting to ${currentEnv} database...`);
  console.log(`Host: ${dbConfig.host}, Database: ${dbConfig.database}`);
  // 在实际项目中，这里会连接真实的数据库
  return Promise.resolve({
    client: 'mock-database',
    isConnected: true
  });
};

module.exports = {
  connectDatabase,
  dbConfig
};