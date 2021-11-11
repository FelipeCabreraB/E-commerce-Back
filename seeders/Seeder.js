const faker = require("faker");
const { Category, Admin, Order, Product, User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const categories = [];
  const products = [];
  const orders = [];
  const users = [];

  //SEEDER DE CATEGORIES
  for (let i = 0; i < 2; i++) {
    categories.push({
      categoryName: faker.lorem.word(12),
      description: faker.lorem.sentence(3),
      picture: "picture.jpg",
    });
  }

  //SEEDER DE PRODUCTS
  for (let i = 0; i < 20; i++) {
    products.push({
      productName: faker.lorem.word(12),
      description: faker.lorem.sentence(3),
      picture: "picture.jpg",
      price: faker.commerce.price(),
      stock: i + 10,
      featured: false,
      categoryId: Math.floor(Math.random() * (2 - 1 + 1)) + 1,
    });
  }

  //SEEDER DE ORDERS
  for (let i = 0; i < 10; i++) {
    orders.push({
      quantity: Math.floor(Math.random() * (8 - 1 + 1)) + 1,
      statusOrder: faker.lorem.word(10),
      userId: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
    });
  }

  //SEEDER DE USER
  for (let i = 0; i < 10; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: "$2a$10$YYrM5ZnmfO7CWWNS040ZPOh8qGegyUpeXhCOJzlR.J8euLSXQNCba", // password es 123456
      address: faker.address.streetAddress(),
      phone: 6018473,
      completedOrders: Math.floor(Math.random() * (8 - 1 + 1)) + 1,
    });
  }

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Category.");
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Order.");
};
