import React from 'react'
import {connect} from 'react-redux'
import streams from '../apis/streams'
import ScrollArea from 'react-scrollbar'


class Comments extends React.Component {
	state = {comments: [], text: ""} 

	async componentDidMount(){ 
		this.getComments()
	}

	renderComments = () => {
		
		return(

			this.state.comments.map((comment) => { 
				if(comment.streamId === this.props.stream.id){
					return(
						<div key={comment.id} className="item">
							<div className="content">
							    <div style={{paddingBottom: "6px"}} className="header">{comment.user}</div>
							    {comment.content}
							</div>
							{this.renderDelete(comment.user, comment.id)}
						</div>
					);
				}else{
					return null
				}
			})

		);
	}

	renderDelete(user, commentId){
	

		if(this.props.user === user){
			return(
				<div onClick={(e) => this.deleteComment(commentId)} style={{float: "right", cursor: "pointer"}}>delete</div>
			);
			
		}else{
			return null;
		}
	}

	async deleteComment(commentId){
		
		await streams.delete('/comments/' + commentId)
		this.getComments()
	}

	onSubmit = async (e) => { 
		e.preventDefault()
		const data = {
			user: this.props.user,
			content: this.state.text,
			streamId: this.props.stream.id
		}

		await streams.post('/comments', data)
		this.getComments()
		this.setState({text: ""})


	}

	async getComments(){
		const comments = await streams.get('/comments/') 
		this.setState({comments: comments.data})
	}


	render(){ 
			
			return(
				<div>
					<ScrollArea style={{width: "100%", maxHeight: "350px" }} >
						<div className="ui segment">
							<div style={{color: "black"}} className="ui relaxed divided list">
								<h4 >Chat</h4>
								{this.renderComments()} 
				    		</div>
				    		
				    		<div className="ui search">
							</div>
						</div>
					</ScrollArea>
					<form className="ui form" onSubmit={this.onSubmit}>
				    	<input value={this.state.text} onChange={(e) => {this.setState({text: e.target.value})}} style={{width: "100%"}} className="prompt" type="text" placeholder="Add Comment..."/>
				    </form>
			    </div>
			);

		


	}

	
}

const mapStateToProps = (state) => {
	return ({user: state.signedIn.userId}); 
}


export default connect(mapStateToProps)(Comments);

