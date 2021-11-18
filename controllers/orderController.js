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
  res.json({ productsOrder, orders });
}

// Display a listing of the resource.
async function indexFeatured(req, res) {
  const featuredProducts = await Product.findAll({ where: { featured: true } });
  res.json(featuredProducts);
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
  indexFeatured,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
