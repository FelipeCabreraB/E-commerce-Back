const { Order } = require("../models");
const { Product_Order } = require("../models");
const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  console.log("hola");
  const orders = await Order.findAll({
    where: { userId: [req.user.id] },
  });
  const ordersId = [];
  for (const order of orders) {
    ordersId.push(order.id);
  }
  const productsOrder = await Product_Order.findAll({
    where: { orderId: ordersId },
  });

  let orders2 = [];

  for (let i = 0; i < orders.length; i++) {
    for (let x = 0; x < productsOrder.length; x++) {
      if (orders[i].id == productsOrder[x].orderId) {
        {
        }
        orders2.push({
          orderId: orders[i].id,
          orderStatus: orders[i].statusOrder,
          totalPrice: productsOrder[x].quantity * productsOrder[x].price,
          quantity: productsOrder[x].quantity,
          createdAt: orders[i].createdAt,
        });
      }
    }
  }

  const arrayHashmap = orders2.reduce((obj, item) => {
    obj[item.orderId]
      ? ((obj[item.orderId].totalPrice += item.totalPrice),
        (obj[item.orderId].quantity += item.quantity))
      : (obj[item.orderId] = { ...item });
    return obj;
  }, {});

  const orderList = Object.values(arrayHashmap);

  res.json(orderList);
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findOne({ where: { productName: req.params.productName } });
  res.json(product);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const cart = req.body.cart;
  const userId = req.body.userId;
  const order = { statusOrder: "Pending", userId: userId };
  await Order.create(order);

  const createdOrder = await Order.findOne({
    where: { userId: userId },
    order: [["createdAt", "DESC"]],
  });

  const preProductOrder = [];

  for (const item of cart) {
    preProductOrder.push({
      quantity: item.quantity,
      price: item.price,
      orderId: createdOrder.id,
      productId: item.id,
    });
  }

  const arrayHashmap = preProductOrder.reduce((obj, item) => {
    obj[item.productId]
      ? ((obj[item.productId].price += item.price), (obj[item.productId].quantity += item.quantity))
      : (obj[item.productId] = { ...item });
    return obj;
  }, {});

  const productOrder = Object.values(arrayHashmap);

  await Product_Order.bulkCreate(productOrder);

  const productsId = [];

  for (const product of productOrder) {
    productsId.push(product.productId);
  }

  const products = await Product.findAll({
    where: { id: productsId },
  });

  for (let i = 0; i < products.length; i++) {
    for (let x = 0; x < productOrder.length; x++) {
      if (products[i].id === productOrder[x].productId) {
        products[i].update({ stock: products[i].stock - productOrder[x].quantity });
      }
    }
  }

  res.json({ success: "Order completed correctly" });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
