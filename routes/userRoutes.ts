import { Router } from 'express';

const router = Router();

// Login route
router.post('/login', (req, res) => {
  const { mobileNumber, password } = req.body;

  // Check if both mobileNumber and password are provided
  if (!mobileNumber || !password) {
    return res.status(400).json({
      success: false,
      message: 'Mobile number and password are required.'
    });
  }

  // Placeholder authentication logic (replace with actual logic)
  if (mobileNumber === '1234567890' && password === 'password123') {
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'your-jwt-token' // This would be generated in a real-world scenario
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid mobile number or password.'
    });
  }
});

export default router;