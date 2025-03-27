const express = require("express");
const {
  getUsers,
  createUser,
  upload,
  loginUser,
  getUserProfile,
    addAddress,
    getUserAddresses
} = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getUsers);
router.post("/", upload.single("profileImage"), createUser);
router.post("/login/", loginUser);
router.get('/profile/:email', getUserProfile)
router.post("/address/:email",  addAddress);
router.get("/addresses/:email",  getUserAddresses);
module.exports = router;
