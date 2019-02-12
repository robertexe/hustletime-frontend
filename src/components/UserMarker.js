import React from "react";
import { connect } from "react-redux";
import { Marker, InfoWindow } from "react-google-maps";
import user from '../images/user.png'



const UserMarker = (props) => {

	return (
		<div>
			<Marker icon={user} position={props.myMap.currentLocation}>
			{props.errors ?
				<InfoWindow
					defaultPosition={props.myMap.currentLocation}
					defaultOptions={{ minWidth:200, disableAutoPan: true }}>

					<div> {props.errors} </div>

				</InfoWindow> : null
			}


			</Marker>
		</div>
		)
}

const mapStateToProps = state => state


export default connect(mapStateToProps, null)(UserMarker)
