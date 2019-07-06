import React, { Component } from 'react'
import './Particle.css'
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import {postNewArea} from '../../../store/actions/Area/area';
export class Particle extends Component {
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
      s_t9: "",
      formstatus : false
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
  showformhandle() {
    const doesShow = this.state.formstatus;
    this.setState({ formstatus: !doesShow });
  }
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

let buttontitle = "click to see RF 6";
let formtext;
let testformtext;
let formheadertext;
if (this.state.formstatus) {
  buttontitle = "click to see RF 5";
  testformtext = (
    <div>
      <div className="below-custom-form">
        <form className="custom-content-form">
          <div className="form-row">
            <div class="form-group col-md-12">
              <table class="table table-bordered">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">seive size mm</th>
                    <th scope="col">
                    Weight Retained gm (W1)
                    </th>
                    <th scope="col">Cumulative retained gm (W2)</th>
                    <th scope="col">Cumulative retained % (A1)</th>
                    <th scope="col">Passing % (100 - A1)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                     10
                    </th>
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
                  </tr>
                  <tr>
                    <th scope="row">4.75</th>
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
                  </tr>
                  <tr>
                    <th scope="row">
                     2.36
                    </th>
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
                    <th scope="row">1.18</th>
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
                  </tr>
                  <tr>
                    <th scope="row">0.6</th>
                    
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
                  </tr>
                  <tr>
                    <th scope="row">0.3</th>
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
                  <tr>
                    <th scope="row">0.15</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t25"
                        value={this.state.s_t25}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t26"
                        value={this.state.s_t26}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t27"
                        value={this.state.s_t27}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t28"
                        value={this.state.s_t28}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0.075</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t29"
                        value={this.state.s_t29}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t30"
                        value={this.state.s_t30}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t31"
                        value={this.state.s_t31}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t32"
                        value={this.state.s_t32}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">PAN</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t33"
                        value={this.state.s_t33}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t34"
                        value={this.state.s_t34}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t35"
                        value={this.state.s_t35}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t36"
                        value={this.state.s_t36}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Total</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t37"
                        value={this.state.s_t37}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t38"
                        value={this.state.s_t38}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t39"
                        value={this.state.s_t39}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t40"
                        value={this.state.s_t40}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  formheadertext = (
    <div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center center-block">
        <p style={{ textAlign: "center" }}>
        Test Format - RF:6 (Determination of Particle Size for Coarse aggregate)
        </p>
        <hr />
      </div>
    </div>
  );
  formtext = (
    <div>
      <form className="custom-content-form">
        <div className="form-row">
          <div class="form-group col-md-6">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-2 col-form-label">
                date
              </label>
              <div class="col-sm-10">{this.state.date}</div>
            </div>
          </div>
          <div class="form-group col-md-6">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-3 col-form-label">
              Weight of Sample Taken
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
  );
} else {
  testformtext = (
    <div>
      <div className="below-custom-form">
      <form className="custom-content-form">
          <div className="form-row">
            <div class="form-group col-md-12">
              <table class="table table-bordered">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">seive size mm</th>
                    <th scope="col">
                    Weight Retained gm (W1)
                    </th>
                    <th scope="col">Cumulative retained gm (W2)</th>
                    <th scope="col">Cumulative retained % (A1)</th>
                    <th scope="col">Passing % (100 - A1)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                     80
                    </th>
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
                  </tr>
                  <tr>
                    <th scope="row">63</th>
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
                  </tr>
                  <tr>
                    <th scope="row">
                     40
                    </th>
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
                    <th scope="row">25</th>
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
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    
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
                  </tr>
                  <tr>
                    <th scope="row">16</th>
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
                  <tr>
                    <th scope="row">12.5</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t25"
                        value={this.state.s_t25}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t26"
                        value={this.state.s_t26}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t27"
                        value={this.state.s_t27}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t28"
                        value={this.state.s_t28}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t29"
                        value={this.state.s_t29}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t30"
                        value={this.state.s_t30}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t31"
                        value={this.state.s_t31}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t32"
                        value={this.state.s_t32}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4.75</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t33"
                        value={this.state.s_t33}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t34"
                        value={this.state.s_t34}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t35"
                        value={this.state.s_t35}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t36"
                        value={this.state.s_t36}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2.36</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t37"
                        value={this.state.s_t37}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t38"
                        value={this.state.s_t38}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t39"
                        value={this.state.s_t39}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t40"
                        value={this.state.s_t40}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">PAN</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t41"
                        value={this.state.s_t41}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t42"
                        value={this.state.s_t42}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t43"
                        value={this.state.s_t43}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t44"
                        value={this.state.s_t44}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Total</th>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t45"
                        value={this.state.s_t45}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t46"
                        value={this.state.s_t46}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t47"
                        value={this.state.s_t47}
                        onChange={e => this.change(e)}
                      />
                    </td>
                    <td>
                    <input
                        type="text"
                        className="form-control"
                        name="s_t48"
                        value={this.state.s_t48}
                        onChange={e => this.change(e)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  formheadertext = (
    <div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center center-block">
        <p style={{ textAlign: "center" }}>
        Test Format - RF:5 (Determination of Particle Size for Coarse aggregate)
        </p>
        <hr />
      </div>
    </div>
  );
  formtext = (
    <div>
      <form className="custom-content-form">
        <div className="form-row">
          <div class="form-group col-md-6">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-2 col-form-label">
                date
              </label>
              <div class="col-sm-10">{this.state.date}</div>
            </div>
          </div>
          <div class="form-group col-md-6">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-2 col-form-label">
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
              <label for="inputPassword" class="col-sm-3 col-form-label">
              Weight of Sample Taken
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
          <li class="breadcrumb-item active">Particle</li>
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
                     Particle
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
            <hr />
          </div>
         
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center center-block">
                  <button
                    className="btn btn-info"
                    onClick={this.showformhandle.bind(this)}
                  >
                    {buttontitle}
                  </button>
                  <hr />
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
                <h4>Particle</h4>
              </div>
              <div class="card-body">
                <p>
                {formheadertext}
                </p>
                {formtext}
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
              {testformtext}
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
)
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
)(Particle);
