const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// POST
router.post('/create', aboutController.createAbout);

// GET - Get all About entries
router.get('/get/', aboutController.getAbout);

// GET - Get an About entry by ID
router.get('/get/:id', aboutController.getAboutById);

// PUT
router.put('/update/:id', aboutController.updateAbout);

// DELETE
router.delete('/delete/:id', aboutController.deleteAbout);

module.exports = router;
