import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../actions'


class Comments extends React.Component {

	componentDidMount(){ 
		
	}


	render(){ 

		return(
			<div className="ui segment" style={{width: "72.5%"}}>
				<div className="ui relaxed divided list">
				<h5>Chat</h5>
					<div class="item">
	      				<div class="content">
	        				<div class="header">Andre</div>
	        				An excellent person
	      				</div>
	    			</div>
	    			<div class="item">
	      				<div class="content">
	        				<div class="header">Dre</div>
	        				A better person
	      				</div>
	    			</div>
				</div>
			</div>
		);

	}

	
}

export default connect()(Comments);