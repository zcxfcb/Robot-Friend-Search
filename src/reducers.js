import { CHANGE_SEARCH_FIELD,
		 ROBOT_REQUEST_SUCCESS,
		 ROBOT_REQUEST_FAIL,
		 ROBOT_REQUEST_PENDING } from './constants.js';

const initialSearchState = {
	searchField: ''
}

export const searchRobots = (state = initialSearchState, action = '') => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField : action.payload})
			/* 'Object Destructuring' syntax with same effect:
			return {... state, {searchField : action.payload}} */
		default:
			return state;
	}
}

const initialRobotState = {
	robots: [],
	isPending: true,
	error: '',
}

export const requestRobots = (state = initialRobotState, action = '') => {
	switch(action.type) {
		case ROBOT_REQUEST_PENDING:
			return Object.assign({}, state, {isPending : true});
		case ROBOT_REQUEST_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending : false});
		case ROBOT_REQUEST_FAIL:
			return Object.assign({}, state, {error: action.payload, isPending : false});
		default:
			return state;
	}
}