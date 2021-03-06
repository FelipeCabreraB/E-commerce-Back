const faker = require("faker");
const { Category, Order, Product, User, Product_Order } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const categories = [];
  const productsCoff = [];
  const productsAcc = [];
  const orders = [];
  const users = [];
  const productOrders = [];

  //SEEDER DE CATEGORIES
  const categoryName = ["Coffee", "Accessories"];
  const categoryDescription = [
    "A selection of the finest, fresh ground coffees",
    "The best accessories to prepare a delicious coffee",
  ];

  for (let i = 0; i < 2; i++) {
    categories.push({
      categoryName: categoryName[i],
      description: categoryDescription[i],
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
    "V60 Ceramic Dripper 02 Set. The V60 ceramic dripper is manufactured using the traditional Arita yaki Method that has been passed down for 400 years. The traditional Japanese ???Monozukuri??? (innovative production) spirit that pays attention to small details supports the functional beauty of HARIO. Includes: Hario V60 Ceramic Dripper size 02. Hario V60 600ml Serving jug. Pack of 100 filters",
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
    "AeropressGo.jpg",
    "Aeropress.jpg",
    "HarioGrinder.jpg",
    "V60Hario.jpg",
    "KitV60Hario.jpg",
    "SwanNeckPitcher.jpg",
  ];

  const featuredAcc = [false, false, false, true, false, false];

  for (let i = 0; i < 6; i++) {
    productsAcc.push({
      productName: accProductName[i],
      description: accDescription[i],
      accessoriesChar1: accCharacteristic1[i],
      accessoriesChar2: accCharacteristic2[i],
      accessoriesChar3: accCharacteristic3[i],
      picture: accPicture[i],
      price: accPrice[i],
      stock: i + 10,
      featured: featuredAcc[i],
      categoryId: 2,
    });
  }

  //SEEDER DE PRODUCTSCOFF
  const productName = [
    "Timbo",
    "Nauyaca",
    "Women",
    "Sabanera",
    "Boa",
    "Mamba Negra",
    "Naj??",
    "Surucuc??",
    "Culebra",
  ];
  const description = [
    "In 2005 the Santa Ana Volcano erupted for the first time in 85 years and its ashes became natural fertilizer for the entire area of El Salvador. The Las Nubes farm ???with more than 100 years producing high quality coffee??? benefited from this sudden change in the character of the soil, which resulted in a rich acidity in the bean, manifested in the particular ???shine??? of each sip.",
    "Mexico has experienced an explosion in specialty coffee production. This is due to the excellent climatic conditions and rich volcanic soils found in the south of the country. Likewise, the country stands out for its organic coffee production, which occupies a large percentage of total production.",
    "In 2013, in the Mat??o district, a group of local female producers began working with the goal of producing the highest quality coffee. By betting on unity and joint work, the group was gaining visibility and became a reference on the continent. The collective began with 15 women and today it has 24 members who are growing in recognition, while its excellent beans make their way into the world of specialty coffee.",
    "The generous shadows of the Acatenango Valley give birth to this fascinating grain, which holds a tradition in a cup that dates back to the mid-19th century. Grown in the middle of the volcanic belt, this bean stands out for its marked acidity, which combines perfectly with the traditional chocolate edge of local coffee.",
    "Opaced for decades by the Kenyan and Ethiopian coffee industry, Rwanda only entered the specialty coffee board in the past two decades. Quickly, its grains of floral and fruity notes at the same time, ceased to be the best kept secret in Africa, to be a mandatory stop for cuppings around the world.",
    "The volcanic memory of the slopes of Mount Kenya marks these four varieties of the ???Nyeri County??? region by fire. They follow a process of washing and drying in ???African beds??? characteristic of the area, which decants into a cup of acidic notes and an intense body.",
    "In Ethiopia, the cultivation and processing of the plant is inseparable from the local culture, and its emblematic flavor characterizes the country before the world. This grain from the Yirgacheffe region demonstrates that excellence with complex characteristics, notes of orange blossom and peels. An ancestral flavor, a pleasant ritual.",
    "This organic grain, from the mountainous region of Cajamarca, follows the washing process that preserves the intense flavors of the area, offering us a vanilla and smoky cup like tobacco.",
    "Surrounded by lush and rich vegetation, Nicaraguan crops grow on the mineral fertility of the volcanic soil and are sheltered by the humid climate of the tropics. The result is extremely profitable: a coffee with effusive aromas such as cardamom and flavors with connotations of light caramel.",
  ];
  const origin = [
    "El salvador",
    "Mexico, Oaxaca",
    "Brazil, Parana, Tomazina",
    "Guatemala, Valle de Acatenango",
    "Rwanda, Rustiro district",
    "Kenya, Nyeri County",
    "Ethiopia, Yirgacheffe",
    "Peru, Cajamarca",
    "Nicaragua, Matagalpa",
  ];
  const farm = [
    "Las Nubes",
    "Cooperative",
    "Capricornio Cooperative",
    "Chalabal Estrella / El general",
    "Various coffee growers: Bugoyi CWS",
    "Various coffee growers",
    "Various coffee growers",
    "Various coffee growers",
    "Various coffee growers",
  ];
  const notes = [
    "Grapefruit, cinnamon, light caramel",
    "Vanilla, dark chocolate, light caramel, lemon",
    "Sugar cane, honey, jasmine, fennel",
    "Yellow plums, caramel sugar, chocolate",
    "Lime, cocoa and sour cream",
    "Hibiscus flower, cider, blueberry",
    "Cream soda, hairless, random flower",
    "Tangerine, vanilla, blond tobacco",
    "Quince, light caramel, cardamom",
  ];
  const variety = [
    "Red Bourbon",
    "Catimor, Catuai",
    "Yellow Catuai",
    "Catimor, Catuai, Typica",
    "Red Bourbon",
    "Batian SL28",
    "Tipica",
    "Catimor, Caturra, Tipica",
    "Catimor, Caturra",
  ];
  const height = [
    "1400 m",
    "1200 m",
    "650 m",
    "1750 m",
    "1500 - 1900 m",
    "1800 m",
    "2000 m",
    "1700 m",
    "1200 m",
  ];
  const process = [
    "Honey",
    "Washed",
    "Honey",
    "Washed",
    "Washed",
    "Washed",
    "Washed",
    "Washed",
    "Washed",
  ];
  const rating = [87, 84, 86, 83, 84, 86, 85, 83, 82];
  const price = [620, 590, 620, 550, 620, 750, 650, 500, 450];
  const picture = [
    "Timbo.jpg",
    "Nauyaca.jpg",
    "Women.jpg",
    "Sabanera.jpg",
    "Boa.jpg",
    "MambaNegra.jpg",
    "Naja.jpg",
    "Surucucu.jpg",
    "Culebra.jpg",
  ];

  const featuredCoff = [true, false, true, true, false, true, false, false, false];

  const stockCoff = [10, 13, 15, 16, 0, 20, 19, 8, 11];

  for (let i = 0; i < 9; i++) {
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
      stock: stockCoff[i],
      featured: featuredCoff[i],
      categoryId: 1,
    });
  }

  //SEEDER DE ORDERS
  const statusOrder = [
    "Pending",
    "Pending",
    "Pending",
    "Pending",
    "Completed",
    "Pending",
    "Cancelled",
    "Pending",
    "Completed",
    "Completed",
    "Completed",
    "Pending",
    "Completed",
    "Cancelled",
    "Completed",
    "Pending",
    "Cancelled",
    "Pending",
    "Completed",
    "Completed",
    "Completed",
    "Pending",
    "Completed",
    "Cancelled",
    "Completed",
  ];

  for (let i = 0; i < 25; i++) {
    orders.push({
      quantity: Math.floor(Math.random() * (8 - 1 + 1)) + 1,
      statusOrder: statusOrder[i],
      userId: Math.floor(Math.random() * (20 - 1 + 1)) + 1,
    });
  }

  //SEEDER DE USER
  for (let i = 0; i < 30; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: "$2a$10$YYrM5ZnmfO7CWWNS040ZPOh8qGegyUpeXhCOJzlR.J8euLSXQNCba", // password es 123456
      address: faker.address.streetAddress(),
      phone: 601847368,
      completedOrders: Math.floor(Math.random() * (8 - 1 + 1)) + 1,
      role: "client",
    });
  }

  //CREACI??N DEL ADMIN
  const admin = {
    firstname: "Admin",
    lastname: "AdminLastname",
    email: "admin@admin.com",
    password: "123456",
    address: faker.address.streetAddress(),
    phone: 601847368,
    completedOrders: Math.floor(Math.random() * (8 - 1 + 1)) + 1,
    role: "admin",
  };

  //CREACI??N DEL USER
  const user = {
    firstname: "User",
    lastname: "UserLastname",
    email: "user@user.com",
    password: "123456",
    address: faker.address.streetAddress(),
    phone: 26018473,
    completedOrders: Math.floor(Math.random() * (8 - 1 + 1)) + 1,
    role: "client",
  };

  //SEEDER DE PRODUCT ORDERS
  const grinding_type = [
    "Cold Brew",
    "Grain",
    "Aeroress",
    "Turkish coffee",
    "Chemex",
    "Expresso",
    "Filtered",
    "French",
    "Moka",
    "Expresso",
    "Filtered",
    "French",
    "Moka",
    "Cold Brew",
    "Grain",
    "Aeroress",
    "Turkish coffee",
    "French",
    "Aeroress",
    "Expresso",
  ];

  const product_id = [3, 2, 1, 7, 8, 9, 10, 13, 4, 6, 12, 9, 1, 2, 15, 7, 8, 9, 4, 5];
  const product_price = [
    620, 590, 620, 650, 590, 620, 620, 590, 620, 650, 590, 620, 620, 590, 620, 650, 590, 620, 610,
    670,
  ];
  const order_id = [5, 6, 10, 11, 15, 22, 1, 20, 14, 16, 2, 25, 4, 9, 13, 8, 5, 7, 21, 19];

  for (let i = 0; i < 20; i++) {
    productOrders.push({
      quantity: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      productId: product_id[i],
      price: product_price[i],
      grindingType: grinding_type[i],
      orderId: order_id[i],
    });
  }

  await Category.bulkCreate(categories);
  console.log("[Database] Se corri?? el seeder de Category.");
  await Product.bulkCreate(productsCoff);
  console.log("[Database] Se corri?? el seeder de ProductCoff.");
  await Product.bulkCreate(productsAcc);
  console.log("[Database] Se corri?? el seeder de ProductAcc.");
  await User.bulkCreate(users);
  console.log("[Database] Se corri?? el seeder de User.");
  await User.create(admin);
  console.log("[Database] Se cre?? el Admin.");
  await User.create(user);
  console.log("[Database] Se cre?? el User.");
  await Order.bulkCreate(orders);
  console.log("[Database] Se corri?? el seeder de Order.");
  await Product_Order.bulkCreate(productOrders);
  console.log("[Database] Se corri?? el seeder de Product_Order.");
};
