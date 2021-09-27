import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	CLEAT_FILTER,
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Mayank Bisht',
				email: 'mayankbisht799@gmail.com',
				phone: '555-999-5896',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Ruchir Bisht',
				email: 'ruchir@gmail.com',
				phone: '555-111-5896',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Harry White',
				email: 'harry@gmail.com',
				phone: '555-222-5896',
				type: 'professional',
			},
		],
	};
	const [state, dispatch] = useReducer(ContactReducer, initialState);

	//add contact

	//delete contact

	//set current contact

	//clear current contact

	//update contact

	// filter contact

	// clear filter

	return <ContactContext.Provider value={{ contact: state.contacts }}>{props.children}</ContactContext.Provider>;
};

export default ContactState;
