import React, { Component } from "react";
import "./Area.css";
import { connect } from 'react-redux';
import {postNewArea} from '../../../store/actions/Area/area';
 class Area extends Component {
  constructor(props) {
    super(props);
    // React state
    this.state = {
      region_id: "",
      area_name: ""
    };
  }

  // by using arrow functions, we retain value of 'this', and don't need to bind 'this' in the constructor
  handleChange = e => {
    this.setState({
      // get computed property name and set its matching value
      // (works only if the name matches what's in state! but is a nice way to generalize form changes on different types of inputs)
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let body = {
      region_id: this.state.region_id,
      area_name: this.state.area_name
    };
    this.props.postNewArea(body);
    this.props.history.push('/viewArea');
  };
  render() {
    return (
      <div>
        <div class="breadcrumb-holder">
          <div class="container-fluid">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item active">Forms </li>
            </ul>
          </div>
        </div>
        <br />
        <section class="forms">
          <div class="container-fluid">
            <div className="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header d-flex align-items-center">
                    <h4>Add Region</h4>
                  </div>
                  <div class="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <form onSubmit={e => this.handleSubmit(e)}>
                      <div class="form-group">
                        <label>Region</label>
                        <select
                          className="form-control"
                          name="region_id"
                          value={this.state.region_id}
                          onChange={e => this.handleChange(e)}
                        >
                          <option value="0">Choose...</option>
                          <option value="1">Region 1</option>
                          <option value="2">Region 2</option>
                          <option value="3">Region 3</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Area Name</label>
                        <input
                          type="text"
                          placeholder="Indore"
                          class="form-control"
                          name="area_name"
                          value={this.state.area_name}
                          onChange={e => this.handleChange(e)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Signin"
                          class="btn btn-primary"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
	return {
		errors: state.errors
	};
}

export default connect(mapStateToProps, {postNewArea})(Area);

