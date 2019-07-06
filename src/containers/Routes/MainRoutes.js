import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import withAuth from "../../hocs/withAuth";
import Home from "../Home/Home";
import Form1 from "../Pages/Form1/Form1";
import Region from "../Pages/Region/Region";
import ViewRegion from "../Pages/Region/ViewRegion";
import Area from "../Pages/Area/Area";
import Employee from "../Pages/Employee/Employee";
import ViewArea from "../Pages/Area/ViewArea";
import ViewEmployee from "../Pages/Employee/ViewEmployee";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import Add from "./RF/Add";
import Audits from "../Pages/RF/RF - 01/Audits";
import SlumpCone from "../Pages/RF/RF - 02/SlumpCone";
import ConcreteMoulds from "../Pages/RF/RF - 03/ConcreteMoulds";
import Ambient from "../Pages/RF/RF - 04/Ambient";
import Particle from "../Pages/RF/RF-0506/Particle";
import AddJob from "../Pages/Job/AddJob";
import ViewJob from "../Pages/Job/ViewJob";
import  ViewCategory  from "../Pages/Category/ViewCategory";
import  AddCategory  from "../Pages/Category/AddCategory";
import  AddSyllabus  from "../Pages/Syllabus/AddSyllabus";
import  ViewSyllabus  from "../Pages/Syllabus/ViewSyllabus";
import  AddResult  from "../Pages/Result/AddResult";
import  ViewResult  from "../Pages/Result/ViewResult";
import  ViewJobType  from "../Pages/Job/ViewJobType";
import  AddJobType  from "../Pages/Job/AddJobType";
export class MainRoutes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={withAuth(Home)} />
        <Route path="/form1" exact component={withAuth(Form1)} />
        <Route path="/Region" exact component={withAuth(Region)} />
        <Route path="/ViewRegion" exact component={withAuth(ViewRegion)} />
        <Route path="/Area" exact component={withAuth(Area)} />
        <Route path="/ViewArea" exact component={withAuth(ViewArea)} />
        <Route path="/Employee" exact component={withAuth(Employee)} />
        <Route path="/ViewEmployee" exact component={withAuth(ViewEmployee)} />
        <Route path="/ComingSoon" exact component={withAuth(ComingSoon)} />
        <Route path="/Audits" exact component={withAuth(Audits)} />
        <Route path="/SlumpCone" exact component={withAuth(SlumpCone)} />
        <Route
          path="/ConcreteMoulds"
          exact
          component={withAuth(ConcreteMoulds)}
        />
        <Route path="/Ambient" exact component={withAuth(Ambient)} />
        <Route path="/Particle" exact component={withAuth(Particle)} />
        <Route path="/AddJob" exact component={withAuth(AddJob)} />
        <Route path="/ViewJob/:id" exact component={withAuth(ViewJob)} />
        <Route path="/ViewCategory" exact component={withAuth(ViewCategory)} />
        <Route path="/AddCategory" exact component={withAuth(AddCategory)} />
        <Route path="/AddSyllabus" exact component={withAuth(AddSyllabus)} />
        <Route path="/ViewSyllabus" exact component={withAuth(ViewSyllabus)} />
        <Route path="/AddResult" exact component={withAuth(AddResult)} />
        <Route path="/ViewResult" exact component={withAuth(ViewResult)} />
        <Route path="/ViewJobType" exact component={withAuth(ViewJobType)} />
        <Route path="/AddJobType" exact component={withAuth(AddJobType)} />
        <Add />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    // information about current user is used to decide what view to render in Homepage component
    // get any errors from state
  };
}

// withRouter allows us to get props from router to component (to use history object to redirect)
// authUser, removeError passed as mapDispatchToProps (so they are available to Main.js within props!)
export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(MainRoutes)
);

//export default MainRoutes;
