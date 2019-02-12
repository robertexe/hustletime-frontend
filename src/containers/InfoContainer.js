import React, { PureComponent } from 'react'
import StationInfoCard from '../components/StationInfoCard'
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'

class InfoContainer extends PureComponent {
	render(){
		const infoCards = () => {
			return this.props.stations
			.flat()
			.map( (station, idx)  => {
				return (
						<StationInfoCard station={station} key={station.id}/>
				)
			})
		}
		return (
			<div className="info-container">
				{this.props.stations !== null ? infoCards() : null}
			</div>
		)
	}
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(InfoContainer);
