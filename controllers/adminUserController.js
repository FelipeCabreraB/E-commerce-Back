const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
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
  try {
    const updateUser = req.body.data;
    const user = await User.findOne({
      where: { id: updateUser.id },
    });
    user.update({
      firstname: updateUser.firstname,
      lastname: updateUser.lastname,
      email: updateUser.email,
      address: updateUser.address,
      phone: updateUser.phone,
      role: updateUser.role,
    });
    if (user) {
      res.json({ success: "User updated correctly" });
    } else {
      res.json({
        error: "User not found, please make sure the user you are trying to update exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await User.destroy({
      where: { id: req.body.id },
    });
    res.json(`User id: ${req.body.id} destroyed`);
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
