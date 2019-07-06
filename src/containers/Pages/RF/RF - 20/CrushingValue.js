import React, { Component } from "react";
import "./Crushing.css";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import {postNewArea} from '../../../store/actions/Area/area';
export class CrushingValue extends Component {
  constructor(props) {
    super(props);
    // React state
    this.state = {
      supplier: "",
      source: "",
      sample_location: "",
      weight: "",
      agg_type: "",
      weight_balance: "",
      weight_sample_testing: "",
      weight_sample_sieving: "",
      material_passing: "",
      pto_comment: "",
      total: "",
      amount_status: false,
      plant: "",
      date: "",
      s_r1: "",
      s_t1: "",
      s_r3: "",
      s_t3: "",
      s_r5: "",
      s_t5: ""
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
      supplier: this.state.supplier,
      source: this.state.source,
      sample_location: this.state.sample_location,
      weight: this.state.weight,
      agg_type: this.state.agg_type,
      weight_balance: this.state.weight_balance,
      weight_sample_testing: this.state.weight_sample_testing,
      pto_comment: this.state.pto_comment,
      total: this.state.total,
      plant: this.state.plant,
      date: this.state.date,
      s_r1: this.state.s_r1,
      s_t1: this.state.s_t1,
      s_r3: this.state.s_r3,
      s_t3: this.state.s_t3,
      s_r5: this.state.s_r5,
      s_t5: this.state.s_t5
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
                          to={process.env.PUBLIC_URL + "/Particle"}
                        >
                          Particle Size
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/FLakinessIndex"}
                        >
                          Flakiness Index
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/ElongationIndex"}
                        >
                          Elongation Index
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/SlitContent"}
                        >
                          Slit Content
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/Waterabs"}
                        >
                          Gravity and Water abs
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/SurfaceMoisture"}
                        >
                          Surface Moisture
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/Compaction"}
                        >
                          Compaction
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/CrushingValue"}
                        >
                          Crushing
                        </NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-info">
                        <NavLink
                          activeClassName="selected"
                          to={process.env.PUBLIC_URL + "/BulkDensity"}
                        >
                          Bulk Density
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
                    <h4>Crushing</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Test Format - RF:20 (Determination of Aggregate crushing
                      value)
                    </p>
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
                        <div class="form-group col-md-6">
                          <div class="form-group row">
                            <label
                              for="inputPassword"
                              class="col-sm-2 col-form-label"
                            >
                              Supplier
                            </label>
                            <div class="col-sm-10">
                              <input
                                list="browsers"
                                name="supplier"
                                value={this.state.supplier}
                                onChange={e => this.change(e)}
                                className="form-control"
                              />
                              <datalist id="browsers">
                                <option value="supplier 1" />
                                <option value="supplier 2" />
                                <option value="supplier 3" />
                                <option value="supplier 4" />
                                <option value="supplier 5" />
                              </datalist>
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class="form-group row">
                            <label
                              for="inputPassword"
                              class="col-sm-2 col-form-label"
                            >
                              Source
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="inputPassword"
                                name="source"
                                value={this.state.source}
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
                              Sampling Location
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="inputPassword"
                                name="sample_location"
                                value={this.state.sample_location}
                                onChange={e => this.change(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class="form-group row">
                            <label
                              for="inputSubcategory"
                              className="col-sm-2 col-form-label"
                            >
                              Weight of empty cup (W)
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="inputPassword"
                                name="weight"
                                value={this.state.weight}
                                onChange={e => this.change(e)}
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
                              Aggragate Type
                            </label>
                            <div class="col-sm-9">
                              <div class="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  20mm
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox2"
                                >
                                  12.5mm
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox3"
                                  value="option3"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox3"
                                >
                                  10mm
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class="form-group row">
                            <label
                              for="inputPassword"
                              class="col-sm-3 col-form-label"
                            >
                              Weighing Balance Details
                            </label>
                            <div class="col-sm-9">
                              <input
                                type="text"
                                class="form-control"
                                id="inputPassword"
                                name="weight_balance"
                                value={this.state.weight_balance}
                                onChange={e => this.change(e)}
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
        {/*test form here */}
        <section class="forms">
          <div class="container">
            <div className="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header d-flex align-items-center">
                    <h4>Test Details</h4>
                  </div>
                  <div class="card-body">
                    <form className="custom-content-form">
                      <div className="form-row">
                        <div class="form-group col-md-12">
                          <table class="table table-bordered">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">
                                  Specific Gravity of Material
                                </th>
                                <th scope="col">
                                  <em>spg</em>
                                </th>
                                <th scope="col">Test 1 </th>
                                <th scope="col">Test 2</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Weight of aggregates + cup</th>
                                <td>W1</td>
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
                                    name="s_r1"
                                    value={this.state.s_r1}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Weight of aggregates </th>
                                <td>A</td>
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
                                    name="s_r3"
                                    value={this.state.s_r3}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  Weight of material passing 2.36mm sleeve
                                </th>
                                <td>B</td>
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
                                    name="s_r5"
                                    value={this.state.s_r5}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>

                              <tr>
                                <th scope="row">Aggregate Impact Value</th>
                                <td />
                                <td>
                                  <em>B/A x 100%</em>
                                </td>
                                <td>
                                  <em>B/A x 100%</em>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Aggregate Impact Value</th>
                                <td />
                                <td>
                                  <em>%</em>
                                </td>
                                <td>
                                  <em>%</em>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </form>
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
                    <h4>Pto's Comment</h4>
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
                              PTO's Comment
                            </label>
                            <div class="col-sm-10">
                              <textarea
                                class="form-control"
                                id="inputPassword"
                                name="pto_comment"
                                value={this.state.pto_comment}
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
)(CrushingValue);
