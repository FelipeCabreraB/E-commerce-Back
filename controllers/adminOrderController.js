const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.findAll({ order: [["createdAt", "DESC"]] });
  res.json(orders);
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
  console.log(req.body.orderId);
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
