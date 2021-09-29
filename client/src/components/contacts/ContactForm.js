import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});
	const { name, email, phone, type } = contact;

	const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		contactContext.addContact(contact);
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>Add Contact</h2>
			<input type='text' name='name' value={name} placeholder='Name' onChange={onChange} />
			<input type='text' name='email' value={email} placeholder='Email' onChange={onChange} />
			<input type='text' name='phone' value={phone} placeholder='Phone' onChange={onChange} />
			<h5>Contact Type:</h5>
			<input type='radio' name='type' value='personal' onChange={onChange} checked={type === 'personal'} />
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='professional'
				onChange={onChange}
				checked={type === 'professional'}
			/>
			Professional
			<div>
				<input type='submit' value='Save Contact' className='btn btn-primary btn-block' />
			</div>
		</form>
	);
};

export default ContactForm;
