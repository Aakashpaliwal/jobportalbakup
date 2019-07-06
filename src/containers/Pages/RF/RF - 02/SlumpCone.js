import React, { Component } from "react";
import "./Slump.css";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import {postNewArea} from '../../../store/actions/Area/area';
export class SlumpCone extends Component {
  constructor(props) {
    super(props);
    // React state
    this.state = {
      supplier: "",
      source: "",
      plant: "",
      date: "",
      s_t1: "",
      s_t2: "",
      s_t3: "",
      s_t4: "",
      s_t5: "",
      s_t6: "",
      s_t7: "",
      s_t8: " ",
      s_t9: "",
      s_t10: "",
      s_t11: "",
      s_t12: "",
      s_t13: "",
      s_t14: "",
      s_t15: "",
      s_t16: "",
      s_t17: "",
      s_t18: "",
      s_t19: "",
      s_t20: "",
      s_t21: "",
      s_t22: "",
      s_t23: "",
      s_t24: "",
      remarks: ""
    };
  }
  componentWillMount = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = mm + "/" + dd + "/" + yyyy;
    console.log("date here", today);
    this.state.date = today;
    console.log(this.state.date);
  };

  // by using arrow functions, we retain value of 'this', and don't need to bind 'this' in the constructor
  change = e => {
    this.setState({
      // get computed property name and set its matching value
      // (works only if the name matches what's in state! but is a nice way to generalize form changes on different types of inputs)
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let body = {
      plant: this.state.plant,
      date: this.state.date,
      s_t1: this.state.s_t1,
      s_t2: this.state.s_t2,
      s_t3: this.state.s_t3,
      s_t4: this.state.s_t4,
      s_t5: this.state.s_t5,
      s_t6: this.state.s_t6,
      s_t7: this.state.s_t7,
      s_t8: this.state.s_t8,
      s_t9: this.state.s_t9,
      s_t10: this.state.s_t10,
      s_t11: this.state.s_t11,
      s_t12: this.state.s_t12,
      s_t13: this.state.s_t13,
      s_t14: this.state.s_t14,
      s_t15: this.state.s_t15,
      s_t16: this.state.s_t16,
      s_t17: this.state.s_t17,
      s_t18: this.state.s_t18,
      s_t19: this.state.s_t19,
      s_t20: this.state.s_t20,
      s_t21: this.state.s_t21,
      s_t22: this.state.s_t22,
      s_t23: this.state.s_t23,
      s_t24: this.state.s_t24,
      remarks: this.state.remarks
    };
    console.log(body);
    // this.props.postNewArea(body);
    // this.props.history.push('/viewArea');
  };
  render() {
    let display_total_amount;
    if (this.state.amount_status == true) {
      display_total_amount = <div>{this.state.total} %</div>;
    } else {
      display_total_amount = (
        <div>
          <p>Enter The Above Fields</p>
        </div>
      );
    }
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
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="custom-btn-lists">
                  <ul>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/ComingSoon"}
                        >
                          Asset type
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/ComingSoon"}
                        >
                          Asset At Plant
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/Audits"}
                        >
                          Audits &amp; Verificiation
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/ComingSoon"}
                        >
                          Replacement
                        </NavLink>
                      </button>
                    </li>
                  </ul>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="custom-btn-lists">
                  <ul>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/Audits"}
                        >
                          RF - 01
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/SlumpCone"}
                        >
                          RF - 02
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/ConcreteMoulds"}
                        >
                          RF - 03
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/Ambient"}
                        >
                          RF - 04
                        </NavLink>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="forms">
          <div class="container">
            <div className="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header d-flex align-items-center">
                    <h4>Verification of Slump Cone</h4>
                  </div>
                  <div class="card-body">
                    <p>RF-2 Verification of Slump cone Apparatus </p>
                    <form className="custom-content-form">
                      <div className="form-row">
                        <div class="form-group col-md-6">
                          <div class="form-group row">
                            <label
                              for="inputPassword"
                              class="col-sm-2 col-form-label"
                            >
                              Plant
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="inputPassword"
                                name="plant"
                                value={this.state.plant}
                                onChange={e => this.change(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class="form-group row">
                            <label
                              for="inputPassword"
                              class="col-sm-2 col-form-label"
                            >
                              date
                            </label>
                            <div class="col-sm-10">{this.state.date}</div>
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
        {/*test form here */}
        <section class="forms">
          <div class="container">
            <div className="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header d-flex align-items-center">
                    <h4>Details </h4>
                  </div>
                  <div class="card-body">
                    <form className="custom-content-form">
                      <div className="form-row">
                        <div class="form-group col-md-12">
                          <table class="table table-bordered">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">S.No.</th>
                                <th scope="col">Mould Number</th>
                                <th scope="col">Top Diameter(d1 |d1)</th>
                                <th scope="col">Bottom Diameter (d2 | d2)</th>
                                <th scope="col">Height (h1 | h2)</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t1"
                                    value={this.state.s_t1}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t2"
                                    value={this.state.s_t2}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t3"
                                    value={this.state.s_t3}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t4"
                                    value={this.state.s_t4}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t5"
                                    value={this.state.s_t5}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t6"
                                    value={this.state.s_t6}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t7"
                                    value={this.state.s_t7}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t8"
                                    value={this.state.s_t8}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t9"
                                    value={this.state.s_t9}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t10"
                                    value={this.state.s_t10}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t11"
                                    value={this.state.s_t11}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t12"
                                    value={this.state.s_t12}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t13"
                                    value={this.state.s_t13}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t14"
                                    value={this.state.s_t14}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t15"
                                    value={this.state.s_t15}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t16"
                                    value={this.state.s_t16}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t17"
                                    value={this.state.s_t17}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t18"
                                    value={this.state.s_t18}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t19"
                                    value={this.state.s_t19}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t20"
                                    value={this.state.s_t20}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t21"
                                    value={this.state.s_t21}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t22"
                                    value={this.state.s_t22}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t23"
                                    value={this.state.s_t23}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t24"
                                    value={this.state.s_t24}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </form>
                    <hr />
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      {/* <p>Bulk Density Test</p> */}
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end test form here */}
        {/*pto's comment section */}
        <section class="forms">
          <div class="container">
            <div className="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header d-flex align-items-center">
                    <h4>Remarks</h4>
                  </div>
                  <div class="card-body">
                    <form className="custom-content-form">
                      <div className="form-row">
                        <div class="form-group col-md-12">
                          <div class="form-group row">
                            <label
                              for="inputPassword"
                              class="col-sm-2 col-form-label"
                            >
                              Remarks
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="file"
                                name="remarks"
                                value={this.state.remarks}
                                onChange={e => this.change(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <small>* This Fields are Mandatory . </small>
                      <br />
                      <button
                        class="btn btn-primary"
                        onClick={e => this.handleSubmit(e)}
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
        {/*end pto's form content */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  {}
)(SlumpCone);
