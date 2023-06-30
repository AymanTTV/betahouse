const express = require('express');
//const mongoose = require('mongoose');
//const { MongoMemoryServer } = require('mongodb-memory-server');
const connect = require('./con');

const app = express();

app.use(express.json());

// const port= process.env.PORT || 3000;

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

  

// const startServer = async () => {
//   try {
//     const mongod = new MongoMemoryServer();
//     const uri = await mongod.getUri();

//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Successfully connected to MongoDB in-memory server');

//     app.listen(3000, () => {
//       console.log('Server is listening on port 3000');
//     });
//   } catch (error) {
//     console.error('Failed to connect to MongoDB in-memory server', error);
//   }
// };

// mongoose
//   .connect('mongodb://localhost:27017/betahouse', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Successfully connected');
//     app.listen(3000, () => {
//       console.log('Server is listening on port 3000 !!!');
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// startServer();

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
