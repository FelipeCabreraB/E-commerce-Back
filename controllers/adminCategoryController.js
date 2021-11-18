const { Category } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const categories = await Category.findAll();
  res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  console.log(req.params.categoryId);
  try {
    const category = await Category.findOne({ where: { id: req.params.categoryId } });
    res.json(category);
  } catch (error) {
    console.log(error);
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const newCategory = req.body;
    const category = {
      categoryName: newCategory.categoryName,
      description: newCategory.description,
      picture: newCategory.picture,
    };
    await Category.create(category);
    if (category) {
      res.json({ success: `Category: (name: ${category.categoryName}) created correctly` });
    } else {
      res.json({
        error: "Error please check the submitted information is in the right format.",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const updatedCategory = req.body;
    const category = await Category.findOne({
      where: { id: updatedCategory.id },
    });
    category.update({
      categoryName: updatedCategory.categoryName,
      description: updatedCategory.description,
      picture: updatedCategory.picture,
    });
    if (category) {
      res.json({ success: `Category id: ${category.id}, updated correctly` });
    } else {
      res.json({
        error: "Category not found, please make sure the category you´re trying to update exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Category.destroy({
      where: { id: req.body.id },
    });
    res.json(`Category id: ${req.body.id} destroyed`);
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
