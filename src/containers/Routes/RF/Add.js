import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../../../hocs/withAuth';
import  SlitContent  from '../../Pages/RF/RF-14/SlitContent';
import  FlakinessIndex  from '../../Pages/RF/RF - 09/FlakinessIndex';
import  ElongationIndex  from '../../Pages/RF/RF - 10/ElongationIndex';
import  Waterabs  from '../../Pages/RF/RF-1112/Waterabs';
import { SurfaceMoisture } from '../../Pages/RF/RF-1516/SurfaceMoisture';
import { Compaction } from '../../Pages/RF/RF - 19/Compaction';
import { CrushingValue } from '../../Pages/RF/RF - 20/CrushingValue';
import { BulkDensity } from '../../Pages/RF/RF - 22/BulkDensity';
import { FinenessTest } from '../../Pages/RF/RF - 1718/FinenessTest';

export class MainRoutes extends Component {
  render() {
    return (
        <div>
           <Route path='/SlitContent'exact component={withAuth(SlitContent)}/>
           <Route path='/FlakinessIndex'exact component={withAuth(FlakinessIndex)}/>
           <Route path='/ElongationIndex'exact component={withAuth(ElongationIndex)}/>
           <Route path='/Waterabs'exact component={withAuth(Waterabs)}/>
           <Route path='/SurfaceMoisture'exact component={withAuth(SurfaceMoisture)}/>
           <Route path='/Compaction'exact component={withAuth(Compaction)}/>
           <Route path='/CrushingValue'exact component={withAuth(CrushingValue)}/>
           <Route path='/BulkDensity'exact component={withAuth(BulkDensity)}/>
           <Route path='/FinenessTest'exact component={withAuth(FinenessTest)}/>
           
      </div>
    )
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
export default withRouter(connect(mapStateToProps, {  })(MainRoutes));


//export default MainRoutes;

