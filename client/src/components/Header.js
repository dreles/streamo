import React from 'react'
import {Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

const Header = () => {
	return (
		<div style={{background: "#8DD1CA", marginBottom: "0px"}} className="ui secondary pointing menu">
		<Link to="/" className='item' style={{ fontSize: "35px", left: "35%", color: "white"}}>STREAMO </Link>
			<div className="right menu">
				<GoogleAuth/>
			</div>
		</div>
	); 
};

export default Header 