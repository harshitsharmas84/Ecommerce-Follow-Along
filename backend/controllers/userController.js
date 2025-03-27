const User = require("../models/userModel");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      profileImage: req.file ? req.file.path : null,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );

    // Update last login timestamp
    user.lastLogin = Date.now();
    await user.save();

    res.status(200).json({
      message: 'Login successful',
      token,
      email: user.email,
      name: user.name
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

const getUserProfile = asyncHandler(async (req, res) => {

  const user = await User.findOne({ email: req.params.email });
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});



const addAddress = async (req, res) => {
  try {
    const { email } = req.params;
    const { country, city, address1, address2, zipCode, addressType } = req.body;

    // Format the address
    const formattedAddress = `${addressType}: ${address1}, ${address2 ? address2 + ', ' : ''}${city}, ${country}, ${zipCode}`;

    // Find the user and update their addresses
    const user = await User.findOneAndUpdate(
        { email },
        { $push: { addresses: formattedAddress } },
        { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Address added successfully',
      addresses: user.addresses
    });
  } catch (error) {
    console.error('Error adding address:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const getUserAddresses = async(req, res) => {
  try{
    const {email} = req.params;
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({ message: "User does not exist" });
    }
    res.status(200).json({ addresses: user.addresses || [] });

  } catch (error) {
    console.error('Error getting addresses:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = { getUsers, createUser, upload, loginUser, getUserProfile, addAddress, getUserAddresses };
