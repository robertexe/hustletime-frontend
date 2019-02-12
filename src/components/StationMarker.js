import React, { PureComponent } from "react";
import { Marker} from "react-google-maps";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import subway from "../images/subway.png"


class StationMarker extends PureComponent {
	render(){
		const { stations } = this.props.stations
		return (
			<React.Fragment>
				<Marker className="markers" position={this.props.coords} icon={subway}/>
      </React.Fragment>
		)
	}
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(StationMarker)
