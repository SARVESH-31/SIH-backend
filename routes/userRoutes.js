"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
// Login route (check for case-sensitivity and typos)
router.post('/login', function (req, res) {
    var _a = req.body, mobileNumber = _a.mobileNumber, password = _a.password;
    // Check if both fields are provided
    if (!mobileNumber || !password) {
        return res.status(400).json({
            success: false,
            message: 'Mobile number and password are required.',
        });
    }
    // Placeholder authentication logic (replace with actual logic)
    if (mobileNumber === '1234567890' && password === 'password123') {
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            token: 'your-jwt-token', // Replace with actual JWT generation
        });
    }
    else {
        return res.status(401).json({
            success: false,
            message: 'Invalid mobile number or password.',
        });
    }
});
exports.default = router;
