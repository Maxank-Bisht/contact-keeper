import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
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
		current: null,
		filtered: null,
	};
	const [state, dispatch] = useReducer(contactReducer, initialState);

	//add contact
	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	//delete contact
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	//set current contact
	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	//clear current contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	//update contact
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	// filter contact
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	// clear filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				updateContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				filterContacts,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
