import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import region from "./region";
import area from "./area";
import employee from "./employee";
import job from "./job";
import jobtype from "./jobtype";
import category from "./category";
import syllabus from "./syllabus";
import result from "./result";
// reducers are bundled into index to form rootReducer

// rootReducer is built by combining our reducers
const rootReducer = combineReducers({
  currentUser,
  errors,
  // messages,
  // region,
  // area,
  employee,
  job,
  category,
  syllabus,
  result,
  jobtype
});

export default rootReducer;
