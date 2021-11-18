const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  try {
    const users = await User.findOne({ where: { id: req.user.id } });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

// Show the form for creating a new resource

async function create(req, res) {
  try {
    const email = req.body.data.emailReg;
    const password = req.body.data.passwordReg;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { email, password, role: "client" },
    });
    if (created) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        process.env.APP_JWT_SECRET,
      );
      res.json({ token, id: user.id, role: user.role, email: user.email });
    } else {
      res.json({ error: "Email already exists" });
    }
  } catch (error) {
    console.log({ error: "Internal error, please try again later" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const updatedUser = req.body;
    const userId = req.user.id;
    const user = await User.findOne({
      where: { id: userId },
    });
    user.update({
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname,
      email: updatedUser.email,
      address: updatedUser.address,
      phone: updatedUser.phone,
      role: updatedUser.role,
    });
    // console.log(user);
    if (user) {
      res.json({ success: `Your information has been updated correctly` });
    } else {
      res.json({
        error: "User not found, please make sure there is no information missing",
      });
    }
  } catch (error) {
    console.log(error);
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
