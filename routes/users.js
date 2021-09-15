const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const User = require('../models/User');

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post(
	'/',
	[
		// name is required
		check('name', 'Please enter a name').notEmpty(),
		// email should be corret
		check('email', 'Please enter a valid email').isEmail(),
		// password should be greater than 6 character
		check('password', 'Password should have 6 or more characters').isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
	}
);

module.exports = router;
