import React from 'react'
import Modal from '../Modal.js'
import history from '../../history'
import {connect } from 'react-redux'
import {deleteStream,fetchStream} from '../../actions'
import {Link} from 'react-router-dom'


class StreamDelete extends React.Component {

	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id);
	}

	
	render() {
		const actions = (
			<div className="actions">
				<button onClick={deleteStream(this.props.match.params.id)}className="ui red button"> Delete </button>
				<Link to="/" className="ui button"> Cancel </Link>
			</div>
		);

		if(this.props.stream){
			return(
				<div>
					StreamDelete
					<Modal header="Delete Stream" content={`Are you sure you want to delete ${this.props.stream.title}`} actions={actions} onDismiss={() => {history.push('/')}} />
				</div>

			)

		}
		else{
			return(
				<div></div>
			)
		}
		
	}
	

}

const mapStateToProps = (state, ownProps) => {
	console.log(state)
		return{
			stream: state.streams[ownProps.match.params.id]
		}

	}


export default connect(mapStateToProps,{deleteStream, fetchStream})(StreamDelete) ; 

