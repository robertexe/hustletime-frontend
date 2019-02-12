import React, { PureComponent } from "react";
import MapComponent from  '../components/MapComponent';
import config from '../config';




class MapContainer extends PureComponent {

  render() {
    return (
			<div className="map-container">
      <MapComponent
				googleMapURL={config.MY_KEY}
				loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
				containerElement={<div style={{ height: `275px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%`, width: `100%` }} />}
      />
			</div>
    )
  }
}



export default MapContainer;
