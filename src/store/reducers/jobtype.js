import {LOAD_JOB_TYPE} from '../actionTypes';

const jobtype = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_JOB_TYPE:
			return [...action.jobtype];
		default:
			return state;
	}
};

export default jobtype;