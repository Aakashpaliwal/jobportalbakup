import {LOAD_RESULT} from '../actionTypes';

const result = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_RESULT:
			return [...action.result];
		default:
			return state;
	}
};

export default result;