const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
/* async function create(req, res) {
  const emailCheck = await User.find({ email: req.body.data.email });
  if (emailCheck[0]) return res.json({ error: "Email already exists" });
  const user = await new User(req.body.data);

  const { fullname } = req.body.data;
  const usernameExists = await User.find({ fullname: fullname });

  usernameExists !== null
    ? (user.username = fullname + usernameExists.length)
    : (user.username = fullname);

  await user.save().catch((error) => console.log(error));

  if (req.body.data.email && req.body.data.fullname && req.body.data.password) {
    const token = jwt.sign(
      {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        completedOrder: user.completedOrders,
      },
      process.env.APP_JWT_SECRET,
    );
    res.json({ token, id: user._id, following: [] });
  } else {
    res.json({ error: "All inputs are required" });
  }
} */

async function create(req, res) {
  try {
    const email = req.body.data.emailReg;
    const password = req.body.data.passwordReg;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { email, password },
    });
    if (created) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.APP_JWT_SECRET,
      );
      res.json({ token });
    } else {
      res.json({ error: "Email already exists" });
    }
  } catch (error) {
    console.log(error);
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
