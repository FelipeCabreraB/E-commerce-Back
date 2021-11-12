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

  //SEEDER DE ACCESSORIES
  /*  const productName
 const description
 const characteristic1
 const characteristic2
 const characteristic3
 const price
 const picture */

  //SEEDER DE PRODUCTS
  const productName = ["Timbo", "Nauyaca", "Women", "Sabanera", "Boa", "Mamba Negra"];
  const description = [
    "In 2005 the Santa Ana Volcano erupted for the first time in 85 years and its ashes became natural fertilizer for the entire area of El Salvador. The Las Nubes farm –with more than 100 years producing high quality coffee– benefited from this sudden change in the character of the soil, which resulted in a rich acidity in the bean, manifested in the particular “shine” of each sip.",
    "Mexico has experienced an explosion in specialty coffee production. This is due to the excellent climatic conditions and rich volcanic soils found in the south of the country. Likewise, the country stands out for its organic coffee production, which occupies a large percentage of total production.",
    "In 2013, in the Matão district, a group of local female producers began working with the goal of producing the highest quality coffee. By betting on unity and joint work, the group was gaining visibility and became a reference on the continent. The collective began with 15 women and today it has 24 members who are growing in recognition, while its excellent beans make their way into the world of specialty coffee.",
    "The generous shadows of the Acatenango Valley give birth to this fascinating grain, which holds a tradition in a cup that dates back to the mid-19th century. Grown in the middle of the volcanic belt, this bean stands out for its marked acidity, which combines perfectly with the traditional chocolate edge of local coffee.",
    "Opaced for decades by the Kenyan and Ethiopian coffee industry, Rwanda only entered the specialty coffee board in the past two decades. Quickly, its grains of floral and fruity notes at the same time, ceased to be the best kept secret in Africa, to be a mandatory stop for cuppings around the world.",
    "The volcanic memory of the slopes of Mount Kenya marks these four varieties of the ‘Nyeri County’ region by fire. They follow a process of washing and drying in ‘African beds’ characteristic of the area, which decants into a cup of acidic notes and an intense body.",
  ];
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
      description: description[i],
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
      categoryId: 1,
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
