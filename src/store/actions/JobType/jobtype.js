import { apiCall } from "../../../services/api";
import { addError } from "../errors";
import { LOAD_JOB_TYPE } from "../../actionTypes";

export const loadJobType = jobtype => ({
  type: LOAD_JOB_TYPE,
  jobtype
});

export const fetchJobType = () => {
  return dispatch => {
    return apiCall("get", "job/type/list")
      .then(res => {
        console.log(res.data.data.items);
        dispatch(loadJobType(res.data.data.items));
      })
      .catch(errors => {
        dispatch(addError(errors));
      });
  };
};

export const postNewJobType = text => (dispatch, getState) => {
  console.log(text);
  //let { currentUser } = getState();
  //const id = currentUser.user.id;			// get id so we know who is posting a message
  // send message to db, from correct user
  return apiCall("post", `job/type/add`, text)
    .then(res => res)
    .catch(err => {
      // alert(err);
      dispatch(addError(err));
      return err;
    });
};
