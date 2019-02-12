


export const getLocation = () => dispatch => {
	navigator.geolocation.getCurrentPosition(position => {
		let obj = { currentLocation : {}}
		let { currentLocation } = obj
		currentLocation['lat'] = position.coords.latitude
		currentLocation['lng'] = position.coords.longitude
		return dispatch({type: 'CURRENT_LOCATION', payload: currentLocation})
	})
}

export const newLocations = (coords) => dispatch => dispatch({type: 'CURRENT_LOCATION', payload: coords })
