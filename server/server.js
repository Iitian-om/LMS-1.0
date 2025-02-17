require('dotenv').config();
const express = require('express');
const cors = require('cors');
const moment = require('moment');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the EduHub LMS Backend API!');
});

// Time route
app.get('/api/time', (req, res) => {
    const currentTime = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    res.json({
        currentTime: currentTime,
        user: 'Iitian-om',
        message: 'Server is working!'
    });
});

// Use authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Current time (UTC): ${moment().utc().format('YYYY-MM-DD HH:mm:ss')}`);
});