const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll();
  res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findOne({ where: { id: req.params.productId } });
  res.json(product);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const updatedProduct = req.body.data;
  const product = await Product.findOne({
    where: { id: updatedProduct.id },
  });
  console.log(product);
  product.update({
    productName: updatedProduct.productName,
    description: updatedProduct.description,
    origin: updatedProduct.origin,
    farm: updatedProduct.farm,
    notes: updatedProduct.notes,
    variety: updatedProduct.variety,
    height: updatedProduct.height,
    process: updatedProduct.process,
    rating: updatedProduct.rating,
    accessoriesChar1: updatedProduct.accessoriesChar1,
    accessoriesChar2: updatedProduct.accessoriesChar2,
    accessoriesChar3: updatedProduct.accessoriesChar3,
    price: updatedProduct.price,
    stock: updatedProduct.stock,
    category: updatedProduct.category,
  });
  res.json("Product updated correctly");
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
