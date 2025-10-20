// 用户模型（内存存储，模拟数据库）
class User {
  constructor() {
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }
    ];
    this.nextId = 3;
  }

  // 获取所有用户
  findAll() {
    return Promise.resolve(this.users);
  }

  // 根据ID获取用户
  findById(id) {
    const user = this.users.find(u => u.id === parseInt(id));
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    return Promise.resolve(user);
  }

  // 创建用户
  create(userData) {
    const newUser = {
      id: this.nextId++,
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  // 更新用户
  update(id, userData) {
    const userIndex = this.users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date().toISOString()
    };

    return Promise.resolve(this.users[userIndex]);
  }

  // 删除用户
  delete(id) {
    const userIndex = this.users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    const deletedUser = this.users.splice(userIndex, 1)[0];
    return Promise.resolve(deletedUser);
  }
}

module.exports = new User();