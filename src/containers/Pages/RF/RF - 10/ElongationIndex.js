import React, { Component } from "react";
import "./Elongation.css";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import {postNewArea} from '../../../store/actions/Area/area';
export class ElongationIndex extends Component {
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
      testing_quantity: "",
      plant: "",
      date: "",
      s_r1: "",
      s_r2: "",
      s_r3: "",
      s_r4: "",
      s_r5: "",
      s_r6: "",
      s_r7: "",
      s_r8: "",
      s_r9: "",
      s_t1: "",
      s_t2: "",
      s_t3: "",
      s_t4: "",
      s_t5: "",
      s_t6: "",
      s_t7: "",
      s_t8: "",
      s_t9: ""
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
      material_passing: this.state.material_passing,
      pto_comment: this.state.pto_comment,
      total: this.state.total,
      testing_quantity: this.state.testing_quantity,
      plant: this.state.plant,
      date: this.state.date,
      s_r1: this.state.s_r1,
      s_r2: this.state.s_r2,
      s_r3: this.state.s_r3,
      s_r4: this.state.s_r4,
      s_r5: this.state.s_r5,
      s_r6: this.state.s_r6,
      s_r7: this.state.s_r7,
      s_r8: this.state.s_r8,
      s_r9: this.state.s_r9,
      s_t1: this.state.s_t1,
      s_t2: this.state.s_t2,
      s_t3: this.state.s_t3,
      s_t4: this.state.s_t4,
      s_t5: this.state.s_t5,
      s_t6: this.state.s_t6,
      s_t7: this.state.s_t7,
      s_t8: this.state.s_t8,
      s_t9: this.state.s_t9
    };
    console.log(body);
    // this.props.postNewArea(body);
    // this.props.history.push('/viewArea');
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
              <li class="breadcrumb-item active">Elongation Index</li>
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
                    <h4>Elongation Index</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      {" "}
                      Test Format - RF:10 (Determination of Aggregate Elongation
                      Index )
                    </p>
                    <form className="custom-content-form">
                      <div className="form-row">
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
                                type="text"
                                class="form-control"
                                id="inputPassword"
                                name="supplier"
                                value={this.state.supplier}
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
                              Weight of Sample Fot Testing
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
                        <div class="form-group col-md-12">
                          <div class="form-group row">
                            <label
                              for="inputPassword"
                              class="col-sm-3 col-form-label"
                            >
                              Minimum Testing Quantity
                            </label>
                            <div class="col-sm-9">
                              <input
                                type="text"
                                class="form-control"
                                id="inputPassword"
                                name="testing_quantity"
                                value={this.state.testing_quantity}
                                onChange={e => this.change(e)}
                              />
                            </div>
                            <small style={{ paddingLeft: "10px" }}>
                              <em>200 Pieces of each fraction</em>
                            </small>
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
        {/*test forms here */}
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
                                  Passing Through IS Sieve (mm)
                                </th>
                                <th scope="col">Retained On IS Sieve (mm)</th>
                                <th scope="col">
                                  Sample Taken on Each Fraction (gm)
                                </th>
                                <th scope="col">
                                  Sample Retained on Each Fraction (gm)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">63.0</th>
                                <td>50.0</td>
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
                                <th scope="row">50.0</th>
                                <td>40.0</td>
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
                                    name="s_r2"
                                    value={this.state.s_r2}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">40.0</th>
                                <td>25.0</td>
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
                                <th scope="row">31.5</th>
                                <td>25.0</td>
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
                                    name="s_r4"
                                    value={this.state.s_r4}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">25.0</th>
                                <td>20.0</td>
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
                                <th scope="row">20.0</th>
                                <td>16.0</td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_t6"
                                    value={this.state.s_t6}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="s_r6"
                                    value={this.state.s_r6}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">16.0</th>
                                <td>12.5</td>
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
                                    name="s_r7"
                                    value={this.state.s_r7}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">12.5</th>
                                <td>10.0</td>
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
                                    name="s_r8"
                                    value={this.state.s_r8}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">10.0</th>
                                <td>6.3</td>
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
                                    name="s_r9"
                                    value={this.state.s_r9}
                                    onChange={e => this.change(e)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="2" style={{ textAlign: "center" }}>
                                  Total
                                </td>
                                <td>
                                  <strong>
                                    <em>calculation need to be done here</em>
                                  </strong>
                                </td>
                                <td>
                                  <strong>
                                    <em>calculation need to be done here</em>
                                  </strong>
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
        {/*end test forms here */}
        {/*pto's comment here */}
        <section class="forms">
          <div class="container">
            <div className="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header d-flex align-items-center">
                    <h4>PTO's Comment</h4>
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
        {/*end pto's comment here */}
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
)(ElongationIndex);
