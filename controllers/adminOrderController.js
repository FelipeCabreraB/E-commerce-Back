const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    console.log("entre");
    const orderPage = Number(req.params.page);
    const ordersPerPage = 10; //Define the number of products you want to see per page
    const numberOfOrders = await Order.count();
    const numberOfPages = Math.ceil(numberOfOrders / ordersPerPage);

    const orders = await Order.findAll({
      limit: ordersPerPage,
      offset: (orderPage - 1) * ordersPerPage,
      order: [["id", "ASC"]],
    });

    res.json({ orders, numberOfPages });
  } catch (error) {
    console.log(error);
  }
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  if (req.body.newStatus !== "Select the new status") {
    const order = await Order.findOne({ where: { id: req.body.orderId } });
    order.update({
      statusOrder: req.body.newStatus,
    });
    res.json({ success: "Status changed correctly." });
  } else {
    res.json({ error: "Please choose a new status" });
  }
}

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
