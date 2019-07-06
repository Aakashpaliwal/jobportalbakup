import {LOAD_JOB} from '../actionTypes';

const job = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_JOB:
			return [...action.job];
		default:
			return state;
	}
};

export default job;
