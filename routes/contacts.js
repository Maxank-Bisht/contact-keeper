const express = require('express');
const authCheck = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// @route       GET api/contacts
// @desc        get all contacts
// @access      Private
router.get('/', authCheck, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.json(contacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route       POST api/contacts
// @desc        Add a contact
// @access      Private
router.post('/', [authCheck, check('name', 'Please Enter a name').notEmpty()], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { name, email, phone, type } = req.body;
	try {
		const newContact = new Contact({
			name,
			email,
			phone,
			type,
			user: req.user.id,
		});
		const contact = await newContact.save();
		res.json(contact);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route       PUT api/contacts/:id
// @desc        update a contact
// @access      Private
router.put('/:id', (req, res) => {
	res.send('Update contact');
});

// @route       DELETE api/contacts/:id
// @desc        Delete a contact
// @access      Private
router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

module.exports = router;
