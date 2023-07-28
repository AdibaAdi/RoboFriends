import React, {Component} from 'react';


class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError: false

		}
	}

	componentDidCatch(error,info){
		this.setState({hasError: info})

	}

	render(){
		if(this.state.hasError){
			return <h1> Error has been detected</h1>

		}
		return this.props.children

	}
}
export default ErrorBoundary;