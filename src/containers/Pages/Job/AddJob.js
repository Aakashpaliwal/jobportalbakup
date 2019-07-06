import React, { Component } from "react";
import "./Job.css";
import { connect } from "react-redux";
import { postNewJob } from "../../../store/actions/Job/job";
import { fetchCategory } from "../../../store/actions/Category/category";
import SimpleReactValidator from "simple-react-validator";
export class AddJob extends Component {
  constructor(props) {
    super(props);
    // React state
    console.log(this.props);
    this.state = {
      ui_title: "",
      ui_description: "",
      ui_type: "",
      ui_link: "",
      ui_category: []
      // selectedFile: null
    };
    this.validator = new SimpleReactValidator();
    // this.fileuploader = this.fileuploader.bind(this);
  }
  componentDidMount() {
    this.props.fetchCategory();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  categorychange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // this.state.ui_category.push(e.target.value);
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ ui_category: value });
  };
  // fileuploader = event => {
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   });
  // };
  // filehandle = e => {
  //   e.preventDefault();
  //   const fd = new FormData();
  //   fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
  //   axios.post("something", fd).then(res => {
  //     console.log(res);
  //   });
  // };
  handleSubmit =async e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let body = {
        ui_title: this.state.ui_title,
        ui_description: this.state.ui_description,
        ui_type: this.state.ui_type,
        ui_link: this.state.ui_link,
        ui_category: this.state.ui_category
      };
      console.log("state here", this.state);
      const res = await this.props.postNewJob(body);
      // this.props.history.push('/ViewJob');
      
      console.log(res);
      
      if (res) {
        if (res.status === 200) {
          alert(res.data.data.description);
          this.props.history.push('/ViewJob');
        } else {
          alert(res.data.errors[0].message)
        }
      }
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };
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
              <li class="breadcrumb-item active">Add Job </li>
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
                    <h4>Add Job</h4>
                  </div>
                  <div class="card-body">
                    {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                    <form>
                      <div class="form-group customjob-title-input">
                        <label>Job Title</label>
                        <input
                          type="text"
                          // placeholder="Web Developer"
                          class="form-control"
                          name="ui_title"
                          value={this.state.ui_title}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "job title",
                            this.state.ui_title,
                            "required|alpha_space|min:11|max:250"
                          )}
                        </span>
                      </div>
                      <div class="form-group customjob-title-input">
                        <label>Job Category</label>
                        <br />

                        <select
                          multiple={true}
                          className="form-control"
                          name="ui_category"
                          value={this.state.ui_category}
                          onChange={e => this.categorychange(e)}
                          // multiple
                        >
                          <option value="choose..">Choose....</option>
                          {category ? (
                            category.map(function(items, id) {
                              return (
                                <option key={id} value={items}>
                                  {items}
                                </option>
                              );
                            }, this)
                          ) : (
                            <span>Data is loading....</span>
                          )}
                        </select>
                        {/* <select
                          class="selectpicker"
                          multiple
                          data-live-search="true"
                          name="ui_category"
                          value={this.state.ui_category}
                          onChange={e => this.handleChange(e)}
                        >
                          <option>Mustard</option>
                          <option>Ketchup</option>
                          <option>Relish</option>
                        </select> */}
                        {/* <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" value="Category1" id="defaultCheck1" onClick={e => this.categorychange(e)}/>
  <label class="form-check-label" for="defaultCheck1">
    Category 1
  </label>
</div>

 <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" value="Category2" id="defaultCheck2" onClick={e => this.categorychange(e)}/>
  <label class="form-check-label" for="defaultCheck2">
    Category 2
  </label>
</div> */}

                        <span className="text-danger">
                          {this.validator.message(
                            "job category",
                            this.state.ui_category,
                            "required"
                          )}
                        </span>
                      </div>
                      <div class="form-group customjob-title-input">
                        <label>Job Type</label>
                        <select
                          className="form-control"
                          name="ui_type"
                          value={this.state.ui_type}
                          onChange={e => this.handleChange(e)}
                        >
                          <option value="0">Choose...</option>
                          <option val="Internship">Internship</option>
                          <option value="Part-Time">Part Time</option>
                          <option value="Full-Time">Full Time</option>
                        </select>
                        <span className="text-danger">
                          {this.validator.message(
                            "job type",
                            this.state.ui_type,
                            "required"
                          )}
                        </span>
                      </div>
                      <div class="form-group customjob-title-input">
                        <label>Job Link</label>
                        <input
                          type="text"
                          // placeholder="Web Developer"
                          class="form-control"
                          name="ui_link"
                          value={this.state.ui_link}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "job link",
                            this.state.ui_link,
                            "required"
                          )}
                        </span>
                      </div>
                      <div class="form-group">
                        <label>Job Description</label>
                        <textarea
                          placeholder="Descripriton!!!"
                          class="form-control"
                          name="ui_description"
                          value={this.state.ui_description}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "descriprtion",
                            this.state.ui_description,
                            "required|min:25|max:2500"
                          )}
                        </span>
                      </div>

                      {/* <div class="form-group">
                        <label>Job Description</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={this.fileuploader.bind(this)}
                        />
                      </div> */}
                      {/* <div class="form-group">
                        <input
                          type="submit"
                          value="Upload Image"
                          class="btn btn-primary"
                          onClick={e => this.filehandle(e)}
                        />
                      </div> */}
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Submit"
                          class="btn btn-primary"
                          onClick={e => this.handleSubmit(e)}
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
    category: state.category,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { postNewJob, fetchCategory }
)(AddJob);
