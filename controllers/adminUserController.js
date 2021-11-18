const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const usersPage = Number(req.params.page);
    const usersPerPage = 3; //Define the number of users you want to see per page
    const numberOfUsers = await User.count();
    const numberOfPages = Math.ceil(numberOfUsers / usersPerPage);

    const users = await User.findAll({
      limit: usersPerPage,
      offset: (usersPage - 1) * usersPerPage,
    });
    res.json({ users, numberOfPages });
  } catch (error) {
    console.log(error);
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const users = await User.findOne({ where: { id: req.params.userId } });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

// Show the form for creating a new resource

async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const newUser = req.body;
    const user = {
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      address: newUser.address,
      phone: newUser.phone,
      role: newUser.role,
      password: newUser.password,
    };

    await User.create(user);
    if (user) {
      res.json({
        success: `User: ${user.firstname} ${user.lastname}) created correctly`,
      });
    } else {
      res.json({
        error: "Error please check the submitted information is in the right format.",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const updateUser = req.body;
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
      res.json({ success: `User id: ${user.id}, updated correctly` });
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
