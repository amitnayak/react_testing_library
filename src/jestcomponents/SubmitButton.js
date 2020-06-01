import React, { Component } from 'react';

class SubmitButton extends Component {
	state={
		msg:""
	}
	handleClick = () => {
		 this.setState({ msg: "button clicked" });
	}

	render(){
		return (
			<div>

			    <button onClick={this.handleClick} data-testid="btn">Click button</button>
			    <span data-testid="msg">{this.state.msg}</span>		    
		    </div>

		)		
	}
}
/*
function SubmitButton() {
	var state={
		msg:""
	}


	//const handleClick = () => {
	function handleClick() {
		//state= Object.assign({}, ...state, {msg:'button clicked'});
		//state = Object.assign({msg:"button clicked"});
		console.log("handleClick");
		state.msg='button clicked';

	}
	return (
		<div>

		    <button onClick={handleClick} data-testid="btn">Click button</button>
		    <span data-testid="msg">{state.msg}</span>		    
	    </div>

	)
}*/
export default SubmitButton;