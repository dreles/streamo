import React from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom'

class StreamList extends React.Component {

	componentDidMount(){
		this.streams = this.props.fetchStreams()
	}

	render(){
		
		return(
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
				<div style={{float: 'right', paddingTop: '15px'}}>{this.renderCreate()}</div>
			</div>
		);
		
	}

	renderAdmin(stream){
		
		if(stream.userId === this.props.loggedInAs){ 
			return(
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`}className="ui button primary">Edit</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button red">Delete</Link>
				</div>
			);
		}
	}

	renderCreate(){
		if(this.props.isLoggedIn){ 
			return(
				<div>
					<Link to='streams/new'>
					 <button className="ui button green">Create Stream</button>
					</Link>
				</div>
			);
			
		}
	} 

	renderList(){
		

			return(
				this.props.streams.map(stream => {
					return(
						<div className="item" key={stream.id} >
						{this.renderAdmin(stream)}

							<i className="large middle aligned icon camera" /> 
							
							<div className="content">
								<Link to={`streams/${stream.id}`} className="header">
									{stream.title}
								</Link>
								
								
								<div className="description">
									{stream.description}
								</div>
						
								
							</div>
						</div>
							
				)})
				
			);
			
	}
	
}

const mapStateToProps = (state) => { 
	return {
				streams: Object.values(state.streams),
				loggedInAs: state.signedIn.userId,
				isLoggedIn: state.signedIn.signedIn 
		 	}
}
	
export default connect(mapStateToProps, {fetchStreams})(StreamList); 