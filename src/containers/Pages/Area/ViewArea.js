import React, { Component } from 'react'
import './Area.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchArea } from '../../../store/actions/Area/area';
export class ViewArea extends Component {
    componentDidMount() {
		this.props.fetchArea();		
  }
  componentDidUpdate() {
		this.props.fetchArea();		
	}

  render() {
    const { area } = this.props;
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
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center center-block">
              <Link to="/ViewRegion">
                {" "}
                <input
                  type="button"
                  value="Region"
                  class="btn btn-primary"
                  style={{ float: "left" }}
                />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center center-block">
              <Link to="/ViewArea">
                {" "}
                <input
                  type="button"
                  value="Area"
                  class="btn btn-primary"
                  style={{ float: "right" }}
                />
              </Link>
            </div>
          
          
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <hr />
                <Link to ="/Area"><button className="btn btn-primary" style={{float : 'right'}}>Add Area</button></Link>
              </div>
            </div>
            <br />
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col ">Area Name</th>
                  </tr>
                </thead>
                <tbody>
                  {area ? (
                    area.map(function(item, id) {
                      return (
                        <tr key={id}>
                          <th scope="row">{item.area_name || "NO DATA"}</th>
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
    area: state.area,
		currentUser: state.currentUser.user.id		// we only need the current user's id, to check against the user id of each message
	};
}

export default connect(mapStateToProps, { fetchArea })(ViewArea);

