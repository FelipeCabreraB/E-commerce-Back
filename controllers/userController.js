const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

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
