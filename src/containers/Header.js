import React, { Component } from 'react'
import logo from '../images/logo.png'

const Header = () => {
	return (
		<div className="heading">
			<img id="logo" src={logo} alt="hustletime-logo"/>
			<div className="logo-name"> HustleTime </div>
		</div>
	)
}

export default Header
