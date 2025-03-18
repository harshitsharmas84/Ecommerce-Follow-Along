const express = require("express");
const {
  getUsers,
  createUser,
  upload,
  loginUser,
  getUserProfile,
    addAddress
} = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getUsers);
router.post("/", upload.single("profileImage"), createUser);
router.post("/login", loginUser);
router.get('/profile/:email', getUserProfile)
router.post("/addresses", addAddress);
module.exports = router;
