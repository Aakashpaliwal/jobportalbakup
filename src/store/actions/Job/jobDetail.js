import { apiCall } from "../../../services/api";
import { addError } from "../errors";
import { LOAD_JOB_DETAIL } from "../../actionTypes";

export const loadJobDetail = jobdetail => ({
  type: LOAD_JOB_DETAIL,
  jobdetail
});

export const fetchJobDetail = () => {
  return dispatch => {
    return apiCall(
      "get",
      `job/posts/details/:8`
    )
      .then(res => {
        console.log(res);

        dispatch(
          loadJobDetail(
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
