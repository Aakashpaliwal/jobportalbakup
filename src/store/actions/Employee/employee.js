import { apiCall } from '../../../services/api';
import { addError } from '../errors';
import { LOAD_EMPLOYEE } from '../../actionTypes';



export const loadEmployee = employee => ({
	type: LOAD_EMPLOYEE,
	employee
});

export const fetchEmployee = () => {
	return dispatch => {
		return apiCall('get', 'employee/view')
            .then((res) => {
                console.log(res.user_data)
				dispatch(loadEmployee(res.user_data));
			})
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};
};

export const postNewEmployee = text => (dispatch, getState) => {
    console.log(text);
	//let { currentUser } = getState();
	//const id = currentUser.user.id;			// get id so we know who is posting a message
	// send message to db, from correct user
	return apiCall('post', `employee/add`,  text )
		.then(res => {alert("Employee has been is Added") })	
		.catch(err => dispatch(addError(err)));
}