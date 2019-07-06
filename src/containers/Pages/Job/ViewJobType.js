import React, { Component } from 'react'
import "./Job.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobType } from "../../../store/actions/JobType/jobtype";
export class ViewJobType extends Component {
    componentDidMount() {
        this.props.fetchJobType();
      }
    
      render() {
        const { jobtype } = this.props;
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
                    <Link to="/AddJobType">
                      <button
                        className="btn btn-primary"
                        style={{ float: "right" }}
                      >
                        Add Job Type
                      </button>
                    </Link>
                  </div>
    
                  
                </div>
                <br />
                <div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col ">Job Type Title</th>
                        {/* <th scope="col ">Job Description</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {jobtype ? (
                        jobtype.map(function (item, id) {
                          
                          return (
                            <tr key={id}>
                              <th scope="row">{item || "NO DATA"}</th>
                              {/* <th scope="row">{item.area_name || "NO DATA"}</th> */}
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
    
function mapStateToProps(state)
{
      return {
        jobtype: state.jobtype,
        currentUser: state.currentUser.user.id // we only need the current user's id, to check against the user id of each message
      };
    }
    
    export default connect(
      mapStateToProps,
      { fetchJobType }
    )(ViewJobType);
    
