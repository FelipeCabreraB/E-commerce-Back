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
  const productName = ["Timbo", "Nauyaca", "Women", "Sabanera", "Boa", "Mamba Negra"];
  const description = [];
  const origin = [
    "El salvador",
    "Mexico, Oaxaca",
    "Brazil, Parana, Tomazina",
    "Guatemala, Valle de Acatenango",
    "Rwanda, Rustiro district",
    "Kenya, Nyeri County",
  ];
  const farm = [
    "Las Nubes",
    "Cooperative",
    "Capricornio Cooperative",
    "Chalabal Estrella / El general",
    "Various coffee growers: Bugoyi CWS",
    "Various coffee growers",
  ];
  const notes = [
    "Grapefruit, cinnamon, light caramel",
    "Vanilla, dark chocolate, light caramel, lemon",
    "Sugar cane, honey, jasmine, fennel",
    "Yellow plums, caramel sugar, chocolate",
    "Lime, cocoa and sour cream",
    "Hibiscus flower, cider, blueberry",
  ];
  const variety = [
    "Red Bourbon",
    "Catimor, Catuai",
    "Yellow Catuai",
    "Catimor, Catuai, Typica",
    "Red Bourbon",
    "Batian SL28",
  ];
  const height = ["1400 m", "1200 m", "650 m", "1750 m", "1500 - 1900 m", "1800 m"];
  const process = ["Honey", "Washed", "Honey", "Washed", "Washed", "Washed"];
  const rating = [87, 84, 86, 83, 84, 86];
  const price = [620, 590, 620, 550, 620, 750];
  const picture = [
    "https://cultocafe.uy/wp-content/uploads/2021/07/Kiosco__0001_Layer-14.jpg",
    "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09426.jpg",
    "https://cultocafe.uy/wp-content/uploads/2020/07/WOMEN.jpg",
    "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09432.jpg",
    "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09436.jpg",
    "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09435.jpg",
  ];

  for (let i = 0; i < 6; i++) {
    products.push({
      productName: productName[i],
      description: faker.lorem.sentence(3),
      origin: origin[i],
      farm: farm[i],
      notes: notes[i],
      variety: variety[i],
      height: height[i],
      process: process[i],
      rating: rating[i],
      picture: picture[i],
      price: price[i],
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
