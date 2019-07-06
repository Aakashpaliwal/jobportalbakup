import { apiCall } from "../../../services/api";
import { addError } from "../errors";
import { LOAD_RESULT } from "../../actionTypes";

export const loadResult = result => ({
  type: LOAD_RESULT,
  result
});

export const fetchResult = () => {
  return dispatch => {
    return apiCall("get", "result/list")
      .then(res => {
        console.log(res);
        dispatch(loadResult(res.data.data.items));
      })
      .catch(err => {
        dispatch(addError(err));
      });
  };
};

export const postNewResult = text => (dispatch, getState) => {
  console.log(text);
  //let { currentUser } = getState();
  //const id = currentUser.user.id;			// get id so we know who is posting a message
  // send message to db, from correct user
  return apiCall("post", `result/add`, text)
    .then(res => res)
    .catch(err => {
      // alert(err);
      dispatch(addError(err));
      return err;
    });
};
