import { apiCall } from "../../../services/api";
import { addError } from "../errors";
import { LOAD_SYLLABUS } from "../../actionTypes";

export const loadSyllabus = syllabus => ({
  type: LOAD_SYLLABUS,
  syllabus
});

export const fetchSyllabus = () => {
  return dispatch => {
    return apiCall("get", "syllabus/list")
      .then(res => {
        console.log(res);
        dispatch(loadSyllabus(res.data.data.items));
      })
      .catch(err => {
        dispatch(addError(err));
      });
  };
};

export const postNewSyllabus = text => (dispatch, getState) => {
  console.log(text);
  //let { currentUser } = getState();
  //const id = currentUser.user.id;			// get id so we know who is posting a message
  // send message to db, from correct user
  return apiCall("post", `syllabus/add`, text)
    .then(res => res)
    .catch(err => {
      // alert(err);
      dispatch(addError(err));
      return err;
    });
};
