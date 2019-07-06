import {LOAD_AREA} from '../actionTypes';

const area = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_AREA:
			return [...action.area];
		default:
			return state;
	}
};

export default area;