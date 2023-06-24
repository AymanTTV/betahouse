const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

// GET /contactForm
router.get('/get', contactFormController.getContactForms);

// GET /contactForm/:id
router.get('/get/:id', contactFormController.getContactFormById);

// POST /contactForm
router.post('/create', contactFormController.createContactForm);

// PUT /contactForm/:id
router.put('/update/:id', contactFormController.updateContactForm);

// DELETE /contactForm/:id
router.delete('/delete/:id', contactFormController.deleteContactForm);

module.exports = router;


