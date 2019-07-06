import React, { Component } from "react";
import "./Syllabus.css";
import { connect } from "react-redux";
import { postNewSyllabus } from "../../../store/actions/Syllabus/syllabus";
import SimpleReactValidator from "simple-react-validator";
export class AddSyllabus extends Component {
  constructor(props) {
    super(props);
    // React state
    console.log(this.props);
    this.state = {
      ui_title: "",
      ui_description: "",
      ui_pdf_link: "",
      ui_link: ""
      // selectedFile: null
    };
    this.validator = new SimpleReactValidator();
    // this.fileuploader = this.fileuploader.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
  handleSubmit = async e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let body = {
        ui_title: this.state.ui_title,
        ui_description: this.state.ui_description,
        ui_pdf_link: this.state.ui_pdf_link,
        ui_link: this.state.ui_link
      };
      console.log("state here", this.state);
      const res = await this.props.postNewSyllabus(body);
      // this.props.history.push('/ViewJob');

      console.log(res);

      if (res) {
        if (res.status === 200) {
          alert(res.data.data.description);
          this.props.history.push("/ViewSyllabus");
        } else {
          alert(res.data.errors[0].message);
        }
      }
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
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
                    <h4>Add Syllabus</h4>
                  </div>
                  <div class="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <form>
                      <div class="form-group customjob-title-input">
                        <label>Syllabus Title</label>
                        <input
                          type="text"
                          placeholder="Web Developer"
                          class="form-control"
                          name="ui_title"
                          value={this.state.ui_title}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "title",
                            this.state.ui_title,
                            "required|min:3|max:50"
                          )}
                        </span>
                      </div>
                      <div class="form-group customjob-title-input">
                        <label>Syllabus Link</label>
                        <input
                          type="text"
                          placeholder="Web Developer"
                          class="form-control"
                          name="ui_link"
                          value={this.state.ui_link}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "syllabus link",
                            this.state.ui_link,
                            "required"
                          )}
                        </span>
                      </div>

                      <div class="form-group customjob-title-input">
                        <label>Syllabus Pdf Link</label>
                        <input
                          type="text"
                          placeholder="Web Developer"
                          class="form-control"
                          name="ui_pdf_link"
                          value={this.state.ui_pdf_link}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "syllabus pdf link",
                            this.state.ui_pdf_link,
                            "required"
                          )}
                        </span>
                      </div>

                      <div class="form-group">
                        <label>Syllabus Description</label>
                        <textarea
                          placeholder="Descripriton!!!"
                          class="form-control"
                          name="ui_description"
                          value={this.state.ui_description}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "description",
                            this.state.ui_description,
                            "required|min:25|max:4500"
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
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { postNewSyllabus }
)(AddSyllabus);
