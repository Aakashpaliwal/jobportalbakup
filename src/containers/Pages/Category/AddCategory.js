import React, { Component } from "react";
import "./Category.css";
import { connect } from "react-redux";
import { postNewCategory } from "../../../store/actions/Category/category";
import SimpleReactValidator from "simple-react-validator";
export class AddCategory extends Component {
  constructor(props) {
    super(props);
    // React state
    console.log(this.props);
    this.state = {
      ui_category: "",
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
  handleSubmit =async e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let body = {
        ui_category: this.state.ui_category
      };
      console.log("state here", this.state);
      const res = await this.props.postNewCategory(body);
      // this.props.history.push('/ViewJob');
      
      console.log(res);
      
      if (res) {
        if (res.status === 200) {
          alert(res.data.data.description);
          this.props.history.push('/ViewCategory');
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
                    <h4>Add Category</h4>
                  </div>
                  <div class="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <form>
                      <div class="form-group customjob-title-input">
                        <label>Category Title</label>
                        <input
                          type="text"
                          placeholder="Web Developer"
                          class="form-control"
                          name="ui_category"
                          value={this.state.ui_category}
                          onChange={e => this.handleChange(e)}
                        />
                        <span className="text-danger">
                          {this.validator.message(
                            "title",
                            this.state.ui_category,
                            "required|min:3|max:20"
                          )}
                        </span>
                      </div>

                    
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
  { postNewCategory }
)(AddCategory);
