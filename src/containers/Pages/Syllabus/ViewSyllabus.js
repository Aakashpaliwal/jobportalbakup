import React, { Component } from "react";
import "./Syllabus.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSyllabus } from "../../../store/actions/Syllabus/syllabus";
export class ViewSyllabus extends Component {
  componentDidMount() {
    this.props.fetchSyllabus();
  }

  render() {
    const { syllabus } = this.props;
    return (
      <div>
        <div class="breadcrumb-holder">
          <div class="container-fluid">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
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
                <Link to="/AddSyllabus">
                  <button
                    className="btn btn-primary"
                    style={{ float: "right" }}
                  >
                    Add Syllabus
                  </button>
                </Link>
              </div>
            </div>
            <br />
            <div>
              <table className="table table-bordered table-responsive">
                <thead>
                  <tr>
                    <th scope="col ">Syllabus Title</th>
                    <th scope="col ">Syllabus Link</th>
                    <th scope="col ">Syllabus Pdf Link</th>
                    <th scope="col ">Syllabus Description</th>
                  </tr>
                </thead>
                <tbody>
                  {syllabus ? (
                    syllabus.map(function(item, id) {
                      return (
                        <tr key={id}>
                          <td scope="row">{item.syllabusTitle || "NO DATA"}</td>
                          <td scope="row">{item.syllabusLink || "NO DATA"}</td>
                          <td scope="row">
                            {item.syllabusPdfLink || "NO DATA"}
                          </td>
                          <td scope="row">
                            {item.syllabusDescription || "NO DATA"}
                          </td>
                        </tr>
                      );
                    }, this)
                  ) : (
                    <span>Data is loading....</span>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    syllabus: state.syllabus,
    currentUser: state.currentUser.user.id // we only need the current user's id, to check against the user id of each message
  };
}

export default connect(
  mapStateToProps,
  { fetchSyllabus }
)(ViewSyllabus);
