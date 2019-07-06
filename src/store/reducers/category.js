import {LOAD_CATEGORY} from '../actionTypes';

const category = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_CATEGORY:
			return [...action.category];
		default:
			return state;
	}
};

export default category;