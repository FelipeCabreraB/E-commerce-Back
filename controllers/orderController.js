const { Order } = require("../models");
const { Product_Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
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

  const orders1 = [];

  for (order of orders) {
    orders1.push({ orderId: order.id, orderStatus: order.statusOrder });
  }

  let orders2 = [];

  for (let i = 0; i < orders.length; i++) {
    for (let x = 0; x < productsOrder.length; x++) {
      if (orders[i].id == productsOrder[x].orderId) {
        if (
          orders2.some((product) => {
            return product.orderId === orders[i].id;
          })
        ) {
        }
        orders2.push({
          orderId: orders[i].id,
          orderStatus: orders[i].statusOrder,
          totalPrice: productsOrder[x].quantity * productsOrder[x].price,
          quantity: productsOrder[x].quantity,
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

  const productOrder = [];

  for (const item of cart) {
    productOrder.push({
      quantity: item.quantity,
      price: item.price,
      grindingType: item.grindingType,
      orderId: createdOrder.id,
      productId: item.id,
    });
  }
  await Product_Order.bulkCreate(productOrder);
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
