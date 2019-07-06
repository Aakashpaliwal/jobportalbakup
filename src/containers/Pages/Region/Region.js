import React, { Component } from 'react';
import './Region.css';
import { connect } from 'react-redux';
import {postNewRegion} from '../../../store/actions/Region/region';
class Region extends Component {
    constructor(props) {
		super(props);
    // React state
      console.log(this.props)
		this.state = {
		region : ""
			
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            region : this.state.region
        }
    //console.log('state here', body)
    this.props.postNewRegion(body);
    this.props.history.push('/viewRegion');
	}
  render() {
    return (
      <div >
        <div class="breadcrumb-holder">
          <div class="container-fluid">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active">Forms       </li>
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
                    <h4>Add Region</h4>
                  </div>
                  <div class="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <form>
                      <div class="form-group">
                        <label>Region Name</label>
                        <input type="text" placeholder="Indore" class="form-control" name="region" value={this.state.region} onChange={e => this.handleChange(e)} />
                      </div>
                      <div class="form-group">
                        <input type="submit" value="Signin" class="btn btn-primary" onClick={e => this.handleSubmit(e)} />
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

export default connect(mapStateToProps, {postNewRegion})(Region);


