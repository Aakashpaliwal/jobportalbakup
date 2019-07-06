import {LOAD_REGION} from '../actionTypes';

const region = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_REGION:
			return [...action.region];
		default:
			return state;
	}
};

export default region;