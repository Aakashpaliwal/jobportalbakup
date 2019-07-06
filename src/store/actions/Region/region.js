import { apiCall } from '../../../services/api';
import { addError } from '../errors';
import { LOAD_REGION } from '../../actionTypes';


export const loadRegion = region => ({
	type: LOAD_REGION,
	region
});

export const fetchRegion = () => {
	return dispatch => {
		return apiCall('get', 'region/view')
            .then((res) => {
                console.log(res.Regiondata)
				dispatch(loadRegion(res.Regiondata));
			})
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};
};

export const postNewRegion = text => (dispatch, getState) => {
    console.log(text);
	//let { currentUser } = getState();
	//const id = currentUser.user.id;			// get id so we know who is posting a message
	// send message to db, from correct user
	return apiCall('post', `region/add`,  text )
		.then(res => {alert("Region is Added") })	
		.catch(err => dispatch(addError(err)));
}