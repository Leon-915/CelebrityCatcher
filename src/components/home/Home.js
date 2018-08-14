import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar, View, TouchableOpacity, 
	Image, ImageBackground, BackHandler, TouchableHighlight, Dimensions } from 'react-native';

import Logo from '../Logo.js';
import BottomImage from '../BottomImage';
import Hide from '../Hide';


export default class Home extends Component {
	static navigationOptions = { header: null, };
	

	constructor(props) {
    super(props);
    this.state = { 
			pressStatusCatcher: false,
			pressStatusSubscriber: false,
			pressStatusCelebrity: false,
		 };
	}
	
	_onHideUnderlayCatcher(){
		this.setState({ pressStatusCatcher: false });
  }
  _onShowUnderlayCatcher(){
		this.setState({ pressStatusCatcher: true });
	}

	_onHideUnderlaySubscriber(){
		this.setState({ pressStatusSubscriber: false });
  }
  _onShowUnderlaySubscriber(){
		this.setState({ pressStatusSubscriber: true });
	}

	_onHideUnderlayCelebrity(){
		this.setState({ pressStatusCelebrity: false });
  }
  _onShowUnderlayCelebrity(){
		this.setState({ pressStatusCelebrity: true });
	}

	render() {
	
		return(
			<View style={styles.container}>
				<View style={styles.container1}>
					<Logo />
				</View>

				<View style={styles.container2}>
					<TouchableHighlight onPress={ () => this.props.navigation.navigate('Login', {id: 'Catcher'}) }
						activeOpacity={1}
						onHideUnderlay={this._onHideUnderlayCatcher.bind(this)}
						onShowUnderlay={this._onShowUnderlayCatcher.bind(this)}
						style={{marginBottom: 20, height: 50, borderRadius: 5}} >

						<View style={styles.buttonView} imageStyle={{ borderRadius: 5 }}>
							<Hide hide={ this.state.pressStatusCatcher } style={styles.hideView}>
								<Image style={styles.icon}
									source={require('../../images/photography.png')} />
							</Hide>

							<Hide hide={ !this.state.pressStatusCatcher } style={styles.hideView}>
								<Image style={styles.icon}
									source={require('../../images/photography-active.png')} />
							</Hide>
							
							<Text style={ this.state.pressStatusCatcher ? styles.pressText : styles.text }>Catcher</Text>

							<Image style={this.state.pressStatusCatcher ? styles.buttonPress : styles.button}
								source={require('../../images/button-bg.png')}	
								resizeMode='stretch' />
						</View>
					</TouchableHighlight>

					<TouchableHighlight onPress={ () => this.props.navigation.navigate('Login', {id: 'Subscriber'}) }
						activeOpacity={1}
						onHideUnderlay={this._onHideUnderlaySubscriber.bind(this)}
						onShowUnderlay={this._onShowUnderlaySubscriber.bind(this)}
						style={{marginBottom: 20, height: 50, borderRadius: 5}} >

						<View style={styles.buttonView}>
							<Hide hide={ this.state.pressStatusSubscriber } style={styles.hideView}>
								<Image style={styles.icon}
									source={require('../../images/person-group.png')} />
							</Hide>

							<Hide hide={ !this.state.pressStatusSubscriber } style={styles.hideView}>
								<Image style={styles.icon}
									source={require('../../images/person-group-active.png')} />
							</Hide>
							
							<Text style={ this.state.pressStatusSubscriber ? styles.pressText : styles.text }>Subscriber</Text>

							<Image style={this.state.pressStatusSubscriber ? styles.buttonPress : styles.button}
								source={require('../../images/button-bg.png')}	
								resizeMode='stretch' />
						</View>
					</TouchableHighlight>

					<TouchableHighlight onPress={ () => this.props.navigation.navigate('Login', {id: 'Celebrity'}) }
						activeOpacity={1}
						onHideUnderlay={this._onHideUnderlayCelebrity.bind(this)}
						onShowUnderlay={this._onShowUnderlayCelebrity.bind(this)}
						style={{marginBottom: 20, height: 50, borderRadius: 5}} >

						<View style={styles.buttonView} imageStyle={{ borderRadius: 5 }}>
							<Hide hide={ this.state.pressStatusCelebrity } style={styles.hideView}>
								<Image style={styles.icon}
									source={require('../../images/star.png')} />
							</Hide>

							<Hide hide={ !this.state.pressStatusCelebrity } style={styles.hideView}>
								<Image style={styles.icon}
									source={require('../../images/star-active.png')} />
							</Hide>

							<Text style={ this.state.pressStatusCelebrity ? styles.pressText : styles.text }>Celebrity</Text>

							<Image style={this.state.pressStatusCelebrity ? styles.buttonPress : styles.button}
								source={require('../../images/button-bg.png')}	
								resizeMode='stretch' />
						</View>
					</TouchableHighlight>
				</View>
	
				<BottomImage />
				
			</View>
	
		)
	}
	
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
	},

	container1: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
				
	},

	container2: {
		flex: 1,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
	},

	buttonView: {
		borderWidth: 1,
		padding: 13,
		borderColor: '#1e869f',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		height: 50,
		
	},

	catcher1: {
		borderWidth: 1,
		padding: 13,
		borderColor: '#1e869f',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
    backgroundColor: '#2ab5a2',
		
		
	},

	subscriber: {
		borderWidth: 1,
		padding: 15,
		borderColor: '#1e869f',
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	celebrity: {
		borderWidth: 1,
		padding: 15,
		borderColor: '#1e869f',
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
	},

	icon: {
		marginRight: 10,
		width: 20, 
		height: 20,
		justifyContent: 'center',
		zIndex: 1,
		
	},

	hideView: {
		position: 'absolute',
		top: 13,
		left: Dimensions.get('window').width / 2 - 90,
		zIndex: 1,
	},

	text: {
		fontSize: 16,
		color: '#1d86a3',
		textAlignVertical: 'center',
		zIndex: 1,
		position: 'absolute',
		top: 12,
		left: Dimensions.get('window').width / 2 - 60,
		
	},

	pressText: {
		fontSize: 16,
		color: 'white',
		textAlignVertical: 'center',
		zIndex: 1,
		position: 'absolute',
		top: 12,
		left: Dimensions.get('window').width / 2 - 60,
	},

	buttonPress: {
    backgroundColor: '#2ab5a2',
		borderRadius: 5,
		height: 50,
		marginTop: -14,
		width: Dimensions.get('window').width - 70,
	},
	
	button: {
    backgroundColor: '#2ab5a2',
		width: 0,
		height: 0,
	}
})