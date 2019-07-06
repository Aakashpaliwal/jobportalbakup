import React, { Component } from 'react'
import './Category.css'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../../store/actions/Category/category";
export class ViewCategory extends Component {
    componentDidMount() {
        this.props.fetchCategory();
      }
      
      render() {
        const { category } = this.props;
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
                    <Link to="/AddCategory">
                      <button
                        className="btn btn-primary"
                        style={{ float: "right" }}
                      >
                        Add Category
                      </button>
                    </Link>
                  </div>
                </div>
                <br />
                <div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col ">Category Title</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {category ? (
                        category.map(function(items, id) {
                          return (
                            <tr key={id}>
                              <td scope="row">{items || "NO DATA"}</td>
                              
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
        category: state.category,
        currentUser: state.currentUser.user.id // we only need the current user's id, to check against the user id of each message
      };
    }
    
    export default connect(
      mapStateToProps,
      { fetchCategory }
    )(ViewCategory);
    
