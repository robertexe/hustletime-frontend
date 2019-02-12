import React from 'react'
import { Feed, Image } from 'semantic-ui-react'

const StationInfoCard = (props) => {

	const get_arrivals = (arrivals) => {
		return arrivals
		.sort((a,b) => a.arrival_time - b.arrival_time)
		.map((element, idx) => {
			let i = idx
			if (i === 5) {
				return
			}
			let timeNow = Math.floor(new Date().getTime() / 1000)
			let direction = null
				switch (element.direction) {
					case 'N':
						direction = 'north - '
						break;
					case 'S':
						direction = 'south - '
						break;
					default:
				}
			let time = Math.floor((element.arrival_time - timeNow) / 60)
			let seconds = "seconds away"
			let content = `${direction} ${time} mins`
			const svg = "./svg/" + element.train[0] + ".svg"
			if (time < 1) {
				return
			}

		return ((
							  <Feed.Event className="each-feed" content={content} image={svg}/>
							))
		})
	}
	return (
		<React.Fragment>
			<div className="info-box">
				<div className="station-name"><h2>{props.station.name}</h2></div>
					<Feed className="line-feed">
							{props.station.arrivals.length > 1 ? get_arrivals(props.station.arrivals) : null}
					</Feed>
			</div>
		</React.Fragment>
		)
	}


export default StationInfoCard
