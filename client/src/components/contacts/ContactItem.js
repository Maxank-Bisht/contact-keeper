import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { _id, name, email, type, phone } = contact;
	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};
	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left card-heading'>
				{name}
				<span
					style={{ float: 'right' }}
					className={'badge ' + (type === 'personal' ? 'badge-primary' : 'badge-success')}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className='list'>
				{email && (
					<li>
						<i className='fas fa-envelope-open'></i> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className='fas fa-phone'></i> {phone}
					</li>
				)}
			</ul>
			<p>
				<button className='btn btn-dark btn-sm' onClick={() => setCurrent(contact)}>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
