const express = require("express");
const {
  getUsers,
  createUser,
  upload,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers);
router.post("/", upload.single("profileImage"), createUser);
router.post("/login", loginUser);
module.exports = router;
