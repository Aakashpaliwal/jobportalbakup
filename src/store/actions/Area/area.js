import { apiCall } from '../../../services/api';
import { addError } from '../errors';
import { LOAD_AREA } from '../../actionTypes';


export const loadArea = area => ({
	type: LOAD_AREA,
	area
});

export const fetchArea = () => {
	return dispatch => {
		return apiCall('get', 'area/view')
            .then((res) => {
                console.log(res.areatdata)
				dispatch(loadArea(res.areatdata));
			})
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};
};

export const postNewArea = text => (dispatch, getState) => {
    console.log(text);
	//let { currentUser } = getState();
	//const id = currentUser.user.id;			// get id so we know who is posting a message
	// send message to db, from correct user
	return apiCall('post', `area/add`,  text )
		.then(res => {alert("area is Added") })	
		.catch(err => dispatch(addError(err)));
}
