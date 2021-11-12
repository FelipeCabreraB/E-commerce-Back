const faker = require("faker");
const { Category, Admin, Order, Product, User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const categories = [];
  const productsCoff = [];
  const productsAcc = [];
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
  const accProductName = [
    "Aeropress Go",
    "Aeropress",
    "Hario grinder",
    "V60 Hario",
    "Kit V60 Hario",
    "Swan neck pitcher",
  ];
  const accDescription = [
    "The AeroPress is a combination of a French press or plunger coffee maker with a paper filter that uses air pressure to make coffee with more oils and less sediment in record time.",
    "The AeroPress is a combination of a French press or plunger coffee maker with a paper filter that uses air pressure to make coffee with more oils and less sediment in record time.",
    "The super compact ceramic Smart G manual grinder is perfect for home use. This Hario grinder has a clear body, allowing you to see the coffee beans. The handle slides sideways for easy storage. Compact design allows the handle to be stored within the band portion for convenient portability",
    "The V60 is iconic and recognized around the world for its functionality and design. The conical shape of the V60 allows for a deeper layer of coffee, and its spiral ridges and lack of flow restriction allow the user to pour water quickly for a delicate body or slowly for a heavier flavor. The dropper features Hario's signature heat resistant glass.",
    "V60 Ceramic Dripper 02 Set. The V60 ceramic dripper is manufactured using the traditional Arita yaki Method that has been passed down for 400 years. The traditional Japanese “Monozukuri” (innovative production) spirit that pays attention to small details supports the functional beauty of HARIO. Includes: Hario V60 Ceramic Dripper size 02. Hario V60 600ml Serving jug. Pack of 100 filters",
    "Easy-to-use stainless steel jug. It offers a slim spout to facilitate the pouring of the water in the preparation of your coffee. Exclusive thin and elongated spout that will allow you to perfectly control the location and flow of water that is poured over the coffee. It is suitable for direct fire, glass ceramic and induction. It is specially designed to be used for infusers such as Aeropress, V60 and Chemex!",
  ];
  const accCharacteristic1 = [
    "Capacity: 2 cups",
    "Capacity: 4 cups",
    "Capacity: 24 gr",
    "Capacity: 1 to 2 cups",
    "Hario V60 Ceramic Dripper size 02",
    "Max capacity: 500 ml",
  ];
  const accCharacteristic2 = [
    "Filter",
    "Filter",
    "Knob to adjust the grind",
    "Heat glass resistant",
    "Hario V60 600ml Serving jug",
    "Stainless steel",
  ];
  const accCharacteristic3 = [
    "Mixer",
    "Mixer",
    "Compact size",
    "Mixer spoon",
    "100 filters pack",
    "Suitable for direct fire, glass ceramic and induction.",
  ];
  const accPrice = [2590, 2590, 4990, 2290, 3990, 4990];
  const accPicture = [
    "https://cultocafe.uy/wp-content/uploads/2021/08/Kiosco__0005_Layer-9.jpg",
    "https://cultocafe.uy/wp-content/uploads/2021/08/Kiosco__0008_Layer-4.jpg",
    "https://cultocafe.uy/wp-content/uploads/2021/08/Kiosco__0002_Layer-13.jpg",
    "https://cultocafe.uy/wp-content/uploads/2021/08/Kiosco__0009_Layer-3.jpg",
    "https://cultocafe.uy/wp-content/uploads/2021/08/Kiosco__0003_Layer-11.jpg",
    "https://cultocafe.uy/wp-content/uploads/2021/08/Kiosco__0010_Layer-2.jpg",
  ];

  for (let i = 0; i < 6; i++) {
    productsCoff.push({
      productName: accProductName[i],
      description: accDescription[i],
      accCharacteristic1: accCharacteristic1[i],
      accCharacteristic2: accCharacteristic2[i],
      accCharacteristic3: accCharacteristic3[i],
      picture: accPicture[i],
      price: accPrice[i],
      stock: i + 10,
      featured: false,
      categoryId: 2,
    });
  }

  //SEEDER DE PRODUCTSCOFF
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
    productsCoff.push({
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
  await Product.bulkCreate(productsCoff);
  console.log("[Database] Se corrió el seeder de Product.");
  await Product.bulkCreate(productsAcc);
  console.log("[Database] Se corrió el seeder de Product.");
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Order.");
};
