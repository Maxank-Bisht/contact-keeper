import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	return (
		<form>
			<input type='text' placeholder='Find Contacts...' />
		</form>
	);
};

export default ContactFilter;
