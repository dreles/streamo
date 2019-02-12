import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'
import flv from 'flv.js'
import Comments from '../Comments'

class StreamShow extends React.Component{

	constructor(props){
		super(props)

		this.videoRef = React.createRef()
	}

	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id) 
		this.buildPlayer()
		
	}

	componentDidUpdate(){
		this.buildPlayer()
	}

	componentWillUnmount(){
		this.player.destroy() 
	}

	buildPlayer(){
		if(this.player || !this.props.stream){
			return
		}

		this.player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
		})
		this.player.attachMediaElement(this.videoRef.current)
		this.player.load()
	}


	render(){ 
		console.log(this.props)
		if(!this.props.stream){
			return(
				<div>Loading . . .</div>
			)
		}
		else{ 
			return(
				<div>
					<video ref={this.videoRef} style={{width: "100%"}} controls={true}></video>
					<h1>{this.props.stream.title}</h1>
					
					<Comments stream={this.props.stream}/> 

					
				</div>
			)
		}
		
	}
	
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow); 