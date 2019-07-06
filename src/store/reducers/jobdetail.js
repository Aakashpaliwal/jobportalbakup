import {LOAD_JOB_DETAIL} from '../actionTypes';

const jobdetail = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_JOB_DETAIL:
			return [...action.jobdetail];
		default:
			return state;
	}
};

export default jobdetail;
