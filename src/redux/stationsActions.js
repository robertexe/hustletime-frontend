
export const fetchStations = (loc) => dispatch => {
		return fetch(`http://localhost:3001/api/v1/locations`, {
		    method: 'POST',
		    headers: {
		        Accept: 'application/json',
		        'Content-Type': 'application/json'
		   },
		    body: JSON.stringify({latitude: `${loc.lat}`,
		    longitude: `${loc.lng}`})
		})
		.then(resp => dispatch(fetchHandler(resp)))
		.catch(err => console.error(err))
}

const fetchHandler = (fetch) => dispatch => {
	console.log(fetch.status)
	switch (fetch.status) {
		case 204:
			return dispatch({type: 'ERROR_ONE', payload: "Whoops! We can't seem to find any subway stations near you."})
		case 200:
			dispatch({type: 'CLEAR_ERROR'})
			fetch.json().then(resp => dispatch({type: 'FETCH_STATIONS', payload: resp}))
			break;
		default:
			return
	}
}
