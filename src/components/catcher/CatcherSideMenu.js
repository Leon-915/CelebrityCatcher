import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Actions } from 'react-native-router-flux';
import BottomImage2 from '../BottomImage2';
import Modal from 'react-native-modal';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav';

	
export default class CatcherSideMenu extends Component {

	// state = {
  //   visibleModal: false,
	// };

	_goToCatcherAuction = () => {
		this.setState({ visibleModal: false });
		Actions.catcher_auction()
	}

	updateChild(text) {
		updateState(text)
	}

	render() {
		
		return(
			<View style={styles.modalContent}>
				<View style={styles.close}>
					{/* {this._renderButton('', 'X', () => this.setState({ visibleModal: null }))} */}
				</View>

				<View style={styles.modalTop}>
					<View style={{alignItems: 'center'}}>
						<Image style={styles.photo}
								source={require('../../images/carter.png')} />
					</View>

					<View style={{alignItems: 'center'}}>
						<Text style={{color: 'white', fontSize: 20, alignItems: 'center'}}>John Carter</Text>
					</View>

					<View style={{flexDirection: 'row'}}>
						<Image style={{width: 12}}
								source={require('../../images/location-icon.png')} 
								resizeMode="contain" />
						<Text style={{color: 'white', fontSize: 12, marginLeft: 5,}}>Arizona United States</Text>
					</View>
				</View>

				<View style={styles.modalUnderTop}>
					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/home-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Home</Text>
						<TextInput onChange={(text) => this.updateChild(text)}></TextInput>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/auction-icon.png')} 
								resizeMode="contain" />

						<TouchableOpacity onPress={this._goToCatcherAuction}>
							<Text style={styles.modalItemText}>Auction</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/events-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Events</Text>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/find-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Find Events</Text>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/dashboard-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Dashboard</Text>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/profile-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Profile</Text>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/update-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Latest Update</Text>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/setting-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Settings</Text>
					</View>

					<View style={styles.modalItemView}>
						<Image style={{width: 16, marginRight: 10,}}
								source={require('../../images/logout-icon.png')} 
								resizeMode="contain" />
						<Text style={styles.modalItemText}>Logout</Text>
					</View>
				</View>

				<TouchableOpacity onPress={() => this.setState({visibleModal: true})}>
					<Text style={{}}>Close</Text>
				</TouchableOpacity>
			</View>	
		)
	}
}

const goToCatcherFollowers = () => {
	Actions.catcher_followers()
}

const goToCatcherFollowing = () => {
	Actions.catcher_following()
}

const goToCelebrityFollowing = () => {
	Actions.celebrity_following()
}

const goToCatcherPhotos = () => {
	Actions.catcher_photos()
}

const goToActiveBidPhotos = () => {
	Actions.active_bid_photos()
}

const goToCatcherSoldPhotos = () => {
	Actions.catcher_sold_photos()
}

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
		padding: 0,
		margin: 0,
	},
	
	container1 : {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#31cba5',
		paddingLeft: 35,
		paddingRight: 35,
	},

	container2 : {
    flex: 4,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		marginTop: 40,
	},

	container3 : {
    flex: 1,
	},

	name: {
	},

	photo: {
		borderWidth: 5,
		borderRadius: 50,
		borderColor: '#2293b5',
		width: 100,
		height: 100,
	},

	photoView: {
		alignItems: 'center',
		marginTop: -100,
	},

	location: {
		flexDirection: 'row',
		width: 100,
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 30,
		marginBottom: 25,
	},

	input: {
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingBottom: 7,
		paddingTop: 7,
		paddingRight: 25,
		paddingLeft: 25,
		marginTop: 17,
		borderRadius: 25,
	},

	styleTouchable: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},

	textInput: {
		fontSize: 16,
		color: '#1d94b2',
	},

	signin: {
		justifyContent: 'center',
		marginTop: 20,
		backgroundColor: '#29aca4',
		borderRadius: 5,
		marginBottom: 15,
	},

	signinText: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	remember: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	
	checkBox: {
		marginTop: -7,
	},

	or: {
		marginBottom: 15,
		marginTop: 15,
		position: 'relative',
		alignItems: 'center',

	},

	textOr: {
		backgroundColor: '#aae9fa',
		color: 'white',
		borderRadius: 30,
		padding: 7,
		justifyContent: 'center',
		width: 35,
		height: 35,
		marginTop: -20,
	},

	socialLink: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},

	facebook: {
		backgroundColor: '#1a4a9f',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 40,
		paddingLeft: 40,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	google: {
		backgroundColor: '#ff4141',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 23,
		paddingLeft: 23,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
	},

	signup: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},

	modalContent: {
		flex: 1,
    backgroundColor: '#25a1a1',
		borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start',
		// marginRight: 200,
		width: Dimensions.get("window").width * 0.45,
		height: Dimensions.get("window").height,
	},
	
	close: {
		justifyContent: 'flex-end',
	},

	modalTop: {
		alignItems: 'center',
		
	},
	
	modalUnderTop: {
		alignItems: 'stretch',
		marginTop: 15,
	},

	modalItemText: {
		color: 'white',
		fontSize: 14,
	},

	modalItemView: {
		alignItems: 'stretch',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#8ec4d0',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
	},

	leftArrowImage: {
		width: 50,
		height: 40,
	}
});
