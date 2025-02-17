const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Mock user data
const users = [];

// Register route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = { id: users.length + 1, name, email, password: hashedPassword };
    users.push(user);

    res.status(201).json({ message: 'User registered successfully', user });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT
    const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
});

module.exports = router;