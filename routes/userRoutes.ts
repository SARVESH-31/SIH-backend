const express = require('express');
const { Router } = express;
const router = Router();

// Login route
router.post('/login', (req, res) => {
  const { mobileNumber, password } = req.body;

  if (!mobileNumber || !password) {
    return res.status(400).json({
      success: false,
      message: 'Mobile number and password are required.',
    });
  }

  if (mobileNumber === '1234567890' && password === 'password123') {
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'your-jwt-token', 
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid mobile number or password.',
    });
  }
});

module.exports = router;  // CommonJS export
