import { combineReducers } from 'redux'

const mapState = {
	currentLocation : {
		lat: null,
		lng: null
	}
}

const stationArrivals =  null

const errors = null

export const myMapReducer = (state = mapState, action) => {
	switch (action.type) {
		case 'CURRENT_LOCATION':
			return {
				currentLocation : action.payload
			}
		default:
		return state

	}
}

export const stationsReducer = (state = stationArrivals, action) => {
	console.log(action.payload)
	switch (action.type) {
		case 'FETCH_STATIONS':
			return [action.payload]
		default:
		return state
	}
}

export const errorReducer = (state = errors, action) => {
	switch (action.type) {
		case 'ERROR_ONE':
			return action.payload
		case 'CLEAR_ERROR':
			return null
			break;
		default:
		return state
	}
}




export const rootReducer = combineReducers({
	myMap: myMapReducer,
	stations: stationsReducer,
	errors: errorReducer
})
