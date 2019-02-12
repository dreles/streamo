import React from 'react';
import ReactDOM from 'react-dom';


class Modal extends React.Component { 

render(){ 
	return ReactDOM.createPortal(
		<div onClick={this.props.onDismiss} className="ui dimmer modals visible active">
			<div onClick={(e) => e.stopPropagation() }className="ui standard modal visible active">
				<div className="header">{this.props.header}</div>
				<div className="content">{this.props.content}</div>
				
					{this.props.actions}
			</div>
		</div>,
		document.querySelector("#modal")

	);
}

}

export default Modal;