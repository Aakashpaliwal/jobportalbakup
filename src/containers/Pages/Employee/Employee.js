import React, { Component } from 'react'
import './Employee.css'
import { connect } from 'react-redux';
import {postNewEmployee} from '../../../store/actions/Employee/employee';
class Employee extends Component {
    constructor(props) {
        super(props);
        // React state
        this.state = {
            employee_id: "",
            name: "",
            role_id: "",
            email: "",
            number: "",
            password: ""

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
            employee_id: this.state.employee_id,
            name: this.state.name,
            role_id: this.state.role_id,
            email: this.state.email,
            number: this.state.number,
            password: this.state.password
        };
        console.log('value here', body)
        this.props.postNewEmployee(body);
         this.props.history.push('/viewEmployee');
      };
      render() {
        return (
          <div>
            <div class="breadcrumb-holder">
              <div class="container-fluid">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Forms </li>
                </ul>
              </div>
            </div>
            <br />
            <section class="forms">
              <div class="container">
                <div className="row">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-header d-flex align-items-center">
                        <h4>Add Employee</h4>
                      </div>
                      <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <form className="custom-content-form">
                  <div className="form-row">
                    <div class="form-group col-md-6">
                      <div class="form-group row">
                        <label
                          for="inputPassword"
                          class="col-sm-3 col-form-label"
                        >
                          Employe Id
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword"
                            name="employee_id"
                            value={this.state.employee_id}
                            onChange={e => this.handleChange(e)}
                          />
                        
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <div class="form-group row">
                        <label
                          for="inputPassword"
                          class="col-sm-3 col-form-label"
                        >
                          Employe Name
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword"
                            name="name"
                            value={this.state.name}
                            onChange={e => this.handleChange(e)}
                          />
                        
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <div class="form-group row">
                        <label
                          for="inputSubcategory"
                          className="col-sm-3 col-form-label"
                        >
                          Role
                        </label>
                        <div class="col-sm-9">
                          <select
                            className="form-control"
                            value={this.state.role_id}
                            name="role_id"
                            onChange={e => this.handleChange(e)}
                          >
                            <option value="">Choose...</option>
                            <option value="1">ADMIN</option>
                            <option value="2">EMPLOYEE</option>
                            {/* <option value="3">Role 3</option> */}
                          </select>
                         
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <div class="form-group row">
                        <label
                          for="inputPassword"
                          class="col-sm-3 col-form-label"
                        >
                          Contact Number
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="number"
                            class="form-control"
                            id="inputPassword"
                            name="number"
                            value={this.state.number}
                            onChange={e => this.handleChange(e)}
                          />
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <br />
            <section class="forms">
              <div class="container">
                <div className="row">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-header d-flex align-items-center">
                        <h4>Login Details</h4>
                      </div>
                      <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <form className="custom-content-form">
                  <div class="form-group row">
                    <label
                      for="inputSubcategory"
                      className="col-sm-2 col-form-label"
                    >
                      Email ID
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        name="email"
                        onChange={e => this.handleChange(e)}
                      />
                     
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputSubcategory"
                      className="col-sm-2 col-form-label"
                    >
                      Password
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        name="password"
                        onChange={e => this.handleChange(e)}
                      />
                  
                    </div>
                  </div>
                  <small>* This Fields are Mandatory . </small>
                  <br />
                  <button
                    class="btn btn-primary"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Submit
                  </button>
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
    
    export default connect(mapStateToProps, {postNewEmployee})(Employee);
    
