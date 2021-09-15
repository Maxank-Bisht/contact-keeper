const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

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
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: 'user already exists' });
			}
			user = new User({ name, email, password });

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			res.send('user saved');
		} catch (err) {
			console.error(err.message);
			res.status(500).send('server error');
		}
	}
);

module.exports = router;