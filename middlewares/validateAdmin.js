function validateAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    res.json({ error: "Sorry, just admin user can access to this information" });
  }
}
module.exports = validateAdmin;
