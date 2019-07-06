import { apiCall } from "../../../services/api";
import { addError } from "../errors";
import { LOAD_CATEGORY } from "../../actionTypes";

export const loadCategory = category => ({
  type: LOAD_CATEGORY,
  category
});

export const fetchCategory = () => {
  return dispatch => {
    return apiCall("get", "job/category/list?page_no=1&limit=2")
      .then(res => {
        console.log(res);

        dispatch(loadCategory(res.data.data.items));
      })
      .catch(err => {
        dispatch(addError(err));
      });
  };
};

export const postNewCategory = text => (dispatch, getState) => {
  console.log(text);
  //let { currentUser } = getState();
  //const id = currentUser.user.id;			// get id so we know who is posting a message
  // send message to db, from correct user
  return apiCall("post", `job/category/add`, text)
    .then(res => res)
    .catch(err => {
      // alert(err);
      dispatch(addError(err));
      return err;
    });
};
