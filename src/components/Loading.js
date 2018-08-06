import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './home/Home';
import First from './First';

export default class Loading extends Component {
	static navigationOptions = { header: null, };
	
	
	constructor(props) {
		super(props);
		this.state = {
			component: <First />,
		}
	}

	componentDidMount() {
		this.timeoutHandle = setTimeout(() => {
			this.props.navigation.navigate('Home');
		}, 3000);
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutHandle);
	}

	render(){
		return(
			
			this.state.component
		)
	}
}

const styles = StyleSheet.create({
	container : {
		
	}
})
