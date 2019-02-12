import React from 'react';
import MapContainer from './MapContainer';
import Header from './Header'
import InfoContainer from './InfoContainer'
import { connect } from 'react-redux'



const Home = () => {
  return (
    <div className="home">
      <Header />
      <MapContainer />
      <InfoContainer />
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(Home);
