const express = require("express");
const { register } = require("../controllers/user"); // **
const router = express.Router();

// router.get("/user", (req, res) => {
//   res.send("hello from user");
// });

router.post("/register", register); // ** used controllers folders to export the fucntionality

module.exports = router;
