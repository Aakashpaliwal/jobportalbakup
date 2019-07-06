import {LOAD_SYLLABUS} from '../actionTypes';

const syllabus = (state = [], action) => {
	// console.log("action"+action);
	switch(action.type) {
		case LOAD_SYLLABUS:
			return [...action.syllabus];
		default:
			return state;
	}
};

export default syllabus;