import React, { PureComponent } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLocation, newLocations } from '../redux/mapActions'
import { fetchStations } from '../redux/stationsActions'
import StationMarker from './StationMarker'
import StationInfoCard from './StationInfoCard'

import user from '../images/user.png'
import UserMarker from './UserMarker'


class MapComponent extends PureComponent {

	state = {
		map: null
	}

	componentDidMount(){
		this.props.getLocation()
	}

	componentDidUpdate(prevProps){
		if(this.props.myMap.currentLocation !== prevProps.myMap.currentLocation)
		return this.props.fetchStations(this.props.myMap.currentLocation)
	}

	mapDrag = async (e) => {
		let coords = await JSON.stringify(this.state.map.getCenter())
		coords = JSON.parse(coords)
		this.props.newLocations(coords)
	}

	loadMap = (map) => this.state.map === null ? this.setState({map:map}) : null

	render(){
		const { stations, myMap, errors} = this.props

		const markers = () => {
			return stations
			.flat()
			.map(station => {
					let loc = {
						'lat': parseFloat(station.lat_lng.split(',')[0]),
					 	'lng': parseFloat(station.lat_lng.split(',')[1])
					}
				return (<StationMarker coords={loc} key={station.id}/>)
			})
		}
		return (
			<GoogleMap
				ref={(node) => this.loadMap(node)}
				defaultZoom={14}
				center={myMap.currentLocation}
				onDragEnd={() => this.mapDrag()}
				defaultOptions={
					{
						mapTypeControl: false,
						fullscreenControl: false,
						streetViewControl: false,
						zoomControl: false,
						clickableIcons: false
					}
				}
				clickableIcons={false}>
				{this.props.stations ? markers() : null}
				<UserMarker errors={errors}/>
				{console.log(this.ref)}
			</GoogleMap>
		)
	}
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({ getLocation, newLocations, fetchStations }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withScriptjs(withGoogleMap(MapComponent)))
