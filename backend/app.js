const express = require('express');
const cors = require('cors'); // Import the cors package
const connect = require('./con');

const app = express();

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Import routes
const usersRoutes = require('./route/usersRoutes');
const guriyahaRoutes = require('./route/guriyahaRoutes');
const imagesRoutes = require('./route/imagesRoutes');
const xogtaShirkadaRoutes = require('./route/xogtaShirkadaRoutes');
const aboutRoutes = require('./route/aboutRoutes');
const contactFormRoutes = require('./route/contactFormRoutes');

// Db Connection
connect()
    .then(() => {
        app.listen(4000, () => {
            console.log('Server is listening on port 4000');
        });
    })
    .catch((error) => {
        console.log('Invalid Database Connection!!!!', error);
    });

// Use the routes
app.use('/users', usersRoutes);
app.use('/guriyaha', guriyahaRoutes);
app.use('/images', imagesRoutes);
app.use('/xogtaShirkada', xogtaShirkadaRoutes);
app.use('/about', aboutRoutes);
app.use('/contactForm', contactFormRoutes);

// COMMENTS
// Assuming you have a separate "comments" schema and model, you can create routes for comments related to "guriyaha" here.

module.exports = app;
