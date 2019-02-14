import React from 'react'

const CategoryBar = () => {
	return(
		<div style={{padding: "0px", margin: "0px", backgroundColor: "#e0e1e2"}} class="ui pointing menu">
		  <a class="item">
		    All
		  </a>
		  <a class="item">
		    Video Games
		  </a>
		  <a class="item active">
		    Sports
		  </a>
		  <a class="item">
			Music
		  </a>
		</div>
	);
}

export default CategoryBar