import { apiCall } from "../../../services/api";
import { addError } from "../errors";
import { LOAD_JOB } from "../../actionTypes";

export const loadJob = job => ({
  type: LOAD_JOB,
  job
});

export const fetchJob = () => {
  return dispatch => {
    return apiCall(
      "get",
      `job/posts/list?page_no=${localStorage.getItem("new_page_count")}&limit=2`
    )
      .then(res => {
        console.log(res);
        localStorage.setItem(
          "number_of_pages",
          res.data.data.items[0].numberOfPages
        );
        // let manual_pages_new = res.data.data.items[0].numberOfPages;
        // console.log(manual_pages_new);
        dispatch(
          loadJob(
            res.data.data.items[0].jobPosts,
            res.data.data.items[0].numberOfPages
          )
        );
      })
      .catch(errors => {
        dispatch(addError(errors));
      });
  };
};



export const postNewJob = text => (dispatch, getState) => {
  console.log(text);
  //let { currentUser } = getState();
  //const id = currentUser.user.id;			// get id so we know who is posting a message
  // send message to db, from correct user
  return apiCall("post", `job/post/add`, text)
    .then(res => res)
    .catch(err => {
      // alert(err);
      dispatch(addError(err));
      return err;
    });
};
