import React, { Component } from "react";
import "./Job.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJob } from "../../../store/actions/Job/job";
import { fetchJobDetail } from "../../../store/actions/Job/jobDetail";
import { apiCall } from "../../../services/api";
import axios from "axios";
export class ViewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_no_count: 1,
      limit: 4,
      click: 0
    };
  }
  componentDidMount() {
    this.props.fetchJob();
    localStorage.setItem("new_page_count", this.state.page_no_count);
    localStorage.setItem("new_limit", this.state.limit);
  }
  manualfunc() {
    console.log("hi");
    console.log('http://mahalakshya.dev.letswegrow.com/job/posts/details/:8')
    // return apiCall(
    //   "get",
    //   `job/posts/details/8`
    // ).then(res => {
    //   console.log(res);
    //   });
    // axios
    // .get(
    //   `/job/posts/details/8`,
    //   (axios.defaults.headers.common["x-auth-token"] =
    //     localStorage.getItem('jwt'))
    // )
    // .then(response => {
    //  console.log(response)
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }
  detailCheck(item) {
    console.log(item.jobId);
    this.manualfunc();
    // this.props.fetchJobDetail();
  }
  prevhandler() {
    let new_page_conut_no;
    let prev_page_coount, new_prev_page_count;
    prev_page_coount = localStorage.getItem("new_page_count");
    console.log(prev_page_coount);
    if (prev_page_coount > 1) {
      new_prev_page_count = prev_page_coount - 1;
      new_page_conut_no = new_prev_page_count;
      console.log(new_page_conut_no);
      localStorage.setItem("new_page_count", new_page_conut_no);
      // // console.log(localStorage.getItem('new_page_count'))
      this.props.fetchJob();
    }
  }
  nexthandler() {
    let new_page_conut_no = 2;
    this.state.page_no_count = this.state.page_no_count + 1;
    //   this.setState((prevState) => ({
    //     page_no_count: this.state.page_no_count + 1
    //  }));
    // console.log(this.state.click);
    // this.setState({
    //   page_no_count: this.state.page_no_count++
    // });
    new_page_conut_no = this.state.page_no_count;
    console.log(new_page_conut_no);
    localStorage.setItem("new_page_count", new_page_conut_no);
    // // console.log(localStorage.getItem('new_page_count'))
    this.props.fetchJob();
  }

  render() {
    let btnstatus, nextbtnstatus;
    // let page_count = localStorage.getItem('new_page_count');
    // let final_page_count = localStorage.getItem('number_of_pages')
    // console.log('page_count',page_count)
    // console.log('no_page',final_page_count)
    const { job } = this.props;

    if (
      localStorage.getItem("new_page_count") ==
      localStorage.getItem("number_of_pages")
    ) {
      btnstatus = (
        <button
          className="btn btn-primary"
          onClick={this.nexthandler.bind(this)}
          style={{ float: "right" }}
          disabled
        >
          Next
        </button>
      );
    } else {
      btnstatus = (
        <button
          className="btn btn-primary"
          onClick={this.nexthandler.bind(this)}
          style={{ float: "right" }}
        >
          Next
        </button>
      );
    }
    //nextbtnstatus
    if (localStorage.getItem("new_page_count") == 1) {
      nextbtnstatus = (
        <button
          className="btn btn-primary"
          onClick={this.prevhandler.bind(this)}
          style={{ float: "left" }}
          disabled
        >
          Previous
        </button>
      );
    } else {
      nextbtnstatus = (
        <button
          className="btn btn-primary"
          onClick={this.prevhandler.bind(this)}
          style={{ float: "left" }}
        >
          Previous
        </button>
      );
    }
    return (
      <div>
        <div class="breadcrumb-holder">
          <div class="container-fluid">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item active">Tables </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="card">
          <div class="card-body">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <hr />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Link to="/AddJob">
                  <button
                    className="btn btn-primary"
                    style={{ float: "right" }}
                  >
                    Add Job
                  </button>
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Link to="/ViewJobType" style={{ float: "right" }}>
                  <button className="btn btn-primary">Job Type</button>
                </Link>
              </div>
            </div>
            <br />
            <div>
              <table className="table table-bordered table-responsive-md table-responsive-sm">
                <thead>
                  <tr>
                    <th scope="col ">Job Title</th>
                    <th scope="col ">Job Categories</th>
                    <th scope="col ">Job Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {job ? (
                    job.map(function(item, id) {
                      return (
                        <tr key={id}>
                          <th scope="row">{item.jobTitle || "NO DATA"}</th>
                          <th scope="row">{item.jobCategories || "NO DATA"}</th>
                          <th scope="row">{item.jobType || "NO DATA"}</th>
                          <td>
                            {/* <Link to={`/EditEmploye/${item.employe_id}`}> */}
                            <span
                              class="tooltip-toggle"
                              aria-label="Edit"
                              tabindex="0"
                            >
                              <button className="btn btn-warning custom-edit-btn btn-sm">
                                <i class="fa fa-pencil" aria-hidden="true" />
                              </button>
                            </span>
                            {/* </Link> */}

                            <span
                              class="tooltip-toggle"
                              aria-label="Suspend"
                              tabindex="0"
                            >
                              <button
                                className="btn btn-danger custom-edit-btn btn-sm"
                                // onClick={this.handleCheck.bind(this, item)}
                              >
                                <i class="fa fa-trash-o" aria-hidden="true" />
                              </button>
                            </span>
                            <span
                              class="tooltip-toggle"
                              aria-label="Details"
                              tabindex="0"
                            >
                              <button
                                className="btn btn-success custom-edit-btn btn-sm"
                                onClick={this.detailCheck.bind(this, item)}
                                data-toggle="modal"
                                data-target=".bd-example-modal-lg"
                              >
                                <i class="fa fa-eye" aria-hidden="true" />
                              </button>
                            </span>
                          </td>
                        </tr>
                      );
                    }, this)
                  ) : (
                    <span>Data is loading....</span>
                  )}
                </tbody>
              </table>
              {/* <button
                className="btn btn-primary"
                onClick={this.nexthandler.bind(this)}
                style={{ float: "right" }}
              >
                Next
              </button> */}
              {btnstatus}
              {nextbtnstatus}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    job: state.job,
    currentUser: state.currentUser.user.id // we only need the current user's id, to check against the user id of each message
  };
}

export default connect(
  mapStateToProps,
  { fetchJob }
)(ViewJob);
