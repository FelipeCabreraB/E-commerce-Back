const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findOne({ where: { id: req.params.productId } });
    res.json(product);
  } catch (error) {
    console.log(error);
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const updatedProduct = req.body.data;
    const product = await Product.findOne({
      where: { id: updatedProduct.id },
    });
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
      featured: updatedProduct.featured,
    });
    if (product) {
      res.json({ success: "Product updated correctly" });
    } else {
      res.json({
        error: "Product not found, please make sure the product you´re trying to update exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Product.destroy({
      where: { id: req.body.id },
    });
    res.json(`Product id: ${req.body.id} destroyed`);
  } catch (error) {
    console.log(error);
  }
}

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