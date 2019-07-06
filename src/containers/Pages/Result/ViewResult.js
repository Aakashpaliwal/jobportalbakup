import React, { Component } from 'react'
import './Result.css'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchResult } from "../../../store/actions/Result/result";
export class ViewResult extends Component {
    componentDidMount() {
        this.props.fetchResult();
      }
      
    
      render() {
        const { result } = this.props;
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
                    <Link to="/AddResult">
                      <button
                        className="btn btn-primary"
                        style={{ float: "right" }}
                      >
                        Add Result
                      </button>
                    </Link>
                  </div>
                </div>
                <br />
                <div>
                  <table className="table table-bordered table-responsive">
                    <thead>
                      <tr>
                        <th scope="col ">Result Title</th>
                        <th scope="col ">Result Link</th>
                        <th scope="col ">Result Description</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {result ? (
                        result.map(function(item, id) {
                          return (
                            <tr key={id}>
                              <td scope="row">{item.resultTitle || "NO DATA"}</td>
                              <td scope="row">{item.resultLink || "NO DATA"}</td>
                              <td scope="row">{item.resultDescription || "NO DATA"}</td>
                             
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
        result: state.result,
        currentUser: state.currentUser.user.id // we only need the current user's id, to check against the user id of each message
      };
    }
    
    export default connect(
      mapStateToProps,
      { fetchResult }
    )(ViewResult);
