const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());

// Import routes
const usersRoutes = require('./route/usersRoutes');
const guriyahaRoutes = require('./route/guriyahaRoutes');
const imagesRoutes = require('./route/imagesRoutes');
const xogtaShirkadaRoutes = require('./route/xogtaShirkadaRoutes');
const aboutRoutes = require('./route/aboutRoutes');
const contactFormRoutes = require('./route/contactFormRoutes');

// Db Connection
const database = () => {
    const ConnectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(
            'mongodb+srv://aymanttv:admin@betahouse.q4at5aw.mongodb.net/?retryWrites=true&w=majority',
            ConnectionParams
        );
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
        console.log('Database connection failed');
    }
};

database();

// Use the routes
app.use('/users', usersRoutes);
app.use('/guriyaha', guriyahaRoutes);
app.use('/images', imagesRoutes);
app.use('/xogtaShirkada', xogtaShirkadaRoutes);
app.use('/about', aboutRoutes);
app.use('/contactForm', contactFormRoutes);

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
