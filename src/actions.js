import { CHANGE_SEARCH_FIELD,
		 ROBOT_REQUEST_SUCCESS,
		 ROBOT_REQUEST_FAIL,
		 ROBOT_REQUEST_PENDING } from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text,
})

export const requestRobots = (dispatch) => {
	dispatch({type: ROBOT_REQUEST_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({type: ROBOT_REQUEST_SUCCESS, payload: data}))
	.catch(error => dispatch({type: ROBOT_REQUEST_FAIL, payload: error}));
}