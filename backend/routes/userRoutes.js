const express = require("express");
const {
  getUsers,
  createUser,
  upload,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers);
router.post("/", upload.single("profileImage"), createUser);

module.exports = router;
