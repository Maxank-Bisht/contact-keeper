import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, updateContact, current, clearCurrent } = contactContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});
	const { name, email, phone, type } = contact;

	const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });
	const clearAll = () => {
		clearCurrent();
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		clearCurrent();
	};

	return (
		<form style={myStyle} onSubmit={onSubmit}>
			<h2 className='text-primary'> {current ? 'Edit Contact' : 'Add Contact'} </h2>
			<input type='text' name='name' value={name} placeholder='Name' onChange={onChange} />
			<input type='email' name='email' value={email} placeholder='Email' onChange={onChange} />
			<input type='text' name='phone' value={phone} placeholder='Phone' onChange={onChange} />
			<h4>Contact Type:</h4>
			<label className='myRadio'>
				<input type='radio' name='type' value='personal' onChange={onChange} checked={type === 'personal'} />
				<span>Personal</span>
			</label>
			<label className='myRadio'>
				<input
					type='radio'
					name='type'
					value='professional'
					onChange={onChange}
					checked={type === 'professional'}
				/>
				<span>Professional</span>
			</label>

			<div>
				<input
					type='submit'
					value={current ? 'Update Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear Contact
					</button>
				</div>
			)}
		</form>
	);
};

const myStyle = {
	boxShadow: '0px 4px 8px #00000047',
	padding: '2rem',
	marginTop: '2rem',
	marginBottom: '2rem',
	borderRadius: '7px',
};

export default ContactForm;
