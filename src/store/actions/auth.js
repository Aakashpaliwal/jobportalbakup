import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

// simple action creator
export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function setAuthorizationToken(jwt) {
	setTokenHeader(jwt);
};

// thunks

export function logout() {
	// doing a thunk
	return dispatch => {
		// clear local storage
		localStorage.clear();
		setAuthorizationToken(false);
				// auth header token removed on all requests when logged out
		// set current user object to an empty object instead of a populated object
		dispatch(setCurrentUser({}));
	}
}

export function authUser(type, userData) {
	return dispatch => {
		// make sure apiCall is finished before dispatching action (thunk wrapped in a promise so we can wait for it)
		return new Promise((resolve, reject) => {
			// lowercase 'post'--
			// since we are getting an axios property in apiCall, we need to match to that property
			return apiCall('post', `admin/login`, userData)
				// destructure response data
				.then(({ token, ...user }) => {
					console.log(user)
					// if apiCall returns successfully, we save a local token
					localStorage.setItem('jwt', user.headers["x-auth-token"]);
					setAuthorizationToken(user.headers["x-auth-token"]);	// attach token to all requests while logged in
					// create current user in redux store (only after the API call has finished)
					dispatch(setCurrentUser(user));		// setCurrentUser() generates an action with a type and a user object
					dispatch(removeError);			// removes any previous errors
					resolve();		// indicate API call success
				})
				.catch(err => {
					dispatch(addError(err.message));		// adds error message if error occurs
					reject();		// indicate API call failure
				})
		})
	}
}