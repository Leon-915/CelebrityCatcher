import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, Dimensions, ImageBackground, 
	BackHandler, TouchableHighlight } from 'react-native';
import BottomImage2 from '../BottomImage2';
import Hide from '../Hide';


export default class CelebrityProfile extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Celebrity Profile',
	  headerTitleStyle: { 
	    textAlign: 'center', flex: 1, color: 'white', fontSize: 16, fontWeight: 'normal', marginLeft: -35 
	  },
	  headerStyle: {
	    height: 40,
	  },
	  headerBackground: (
	    <Image resizeMode='stretch' style={{}}
	      source={require('../../images/nav-bg-2.png')}
	    />
		),
		// headerLeft: (
    //   <TouchableOpacity style={{marginLeft: 30}} 
		// 		onPress={ this.menuPress }>
		// 		<Image style={{width: 16, height: 16}}
		// 				source={require('../../images/option-icon.png')} />
		// 	</TouchableOpacity>
		// ),
	  headerTintColor: 'white',
	});

	constructor(props) {
    super(props);
    this.state = {
			visibleModal: false,

			pressStatusFollowers					: false,
			pressStatusFollowing					: false,
			pressStatusCelebrityFollowing : false,
			pressStatusPhotos							: false,
			pressStatusActiveBidPhotos		: false,
			pressStatusSoldPhotos					: false,

			catcher    : false,
			subscriber : false,
			celebrity  : false,
		}
	}

	componentDidMount() {
		if(this.props.navigation.state.params.id === 'Catcher') {
			this.setState({ catcher: true });
		}
		
		if(this.props.navigation.state.params.id === 'Subscriber') {
			this.setState({ subscriber: true });
		}

		if(this.props.navigation.state.params.id === 'Celebrity') {
			this.setState({ celebrity: true });
		}
	}

	_onHideUnderlayFollowers(){
		this.setState({ pressStatusFollowers: false });
  }
  _onShowUnderlayFollowers(){
		this.setState({ pressStatusFollowers: true });
	}	

	_onHideUnderlayFollowing(){
		this.setState({ pressStatusFollowing: false });
  }
  _onShowUnderlayFollowing(){
		this.setState({ pressStatusFollowing: true });
	}	

	_onHideUnderlayCelebrityFollowing(){
		this.setState({ pressStatusCelebrityFollowing: false });
  }
  _onShowUnderlayCelebrityFollowing(){
		this.setState({ pressStatusCelebrityFollowing: true });
	}	

	_onHideUnderlayPhotos(){
		this.setState({ pressStatusPhotos: false });
  }
  _onShowUnderlayPhotos(){
		this.setState({ pressStatusPhotos: true });
	}	

	_onHideUnderlayActiveBidPhotos(){
		this.setState({ pressStatusActiveBidPhotos: false });
  }
  _onShowUnderlayActiveBidPhotos(){
		this.setState({ pressStatusActiveBidPhotos: true });
	}	

	_onHideUnderlaySoldPhotos(){
		this.setState({ pressStatusSoldPhotos: false });
  }
  _onShowUnderlaySoldPhotos(){
		this.setState({ pressStatusSoldPhotos: true });
	}	
	
	render() {

		const { params } =this.props.navigation.state
		
		return(
			<View style={styles.container}>
				
				<View style={styles.container1}>
					<View style={styles.name}>
						<View style={{ flexDirection: 'row' }}>
							<Image style={styles.star}
								source={require('../../images/yellow-star.png')}	/>
							<Image style={styles.star}
								source={require('../../images/yellow-star.png')}	/>
							<Image style={styles.star}
								source={require('../../images/yellow-star.png')}	/>
							<Image style={styles.star}
								source={require('../../images/yellow-star.png')}	/>
							<Image style={styles.star}
								source={require('../../images/yellow-star.png')}	/>
						</View>
						
						<Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', alignItems: 'flex-start',
							marginTop: 3, marginBottom: 5, }}>{params.userInfo.name}</Text>

						<Hide hide={ !this.state.subscriber }>
							<View style={styles.buttonContent}>
								<Image style={styles.personPlus}
									source={require('../../images/person-plus-icon.png')} />
								<Text style={styles.followText}>Follow</Text>
							</View>
						</Hide>

						<Hide hide={ !this.state.celebrity }>
							<View style={styles.buttonContent}>
								<Image style={styles.personPlus}
									source={require('../../images/person-plus-icon.png')} />
								<Text style={styles.followText}>Follow</Text>
							</View>
						</Hide>
						
					</View>

					<View style={styles.location}>
						<View style={{height: 20}}></View>

						<View style={{flexDirection: 'row', marginTop: 3, marginBottom: 5,}}>
							<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 2}}
									source={require('../../images/location-icon.png')} 
									resizeMode="contain" />
							<Text style={{color: 'white', fontSize: 10}}>Arizona United States</Text>
						</View>

						<Hide hide={ !this.state.subscriber }>
							<View style={styles.buttonContent}>
								<Image style={styles.personPlus}
									source={require('../../images/heart-2.png')} />
								<Text style={styles.followText}>Like</Text>
							</View>
						</Hide>

						<Hide hide={ !this.state.celebrity }>
							<View style={styles.buttonContent}>
								<Image style={styles.personPlus}
									source={require('../../images/heart-2.png')} />
								<Text style={styles.followText}>Like</Text>
							</View>
						</Hide>
						
					</View>
				</View>

				<View style={styles.container2}>

					<View style={styles.photoView}>
						<Image style={{marginRight: -2, marginTop: 2, zIndex: 1}}
										source={require('../../images/online-icon.png')} />

						<Image style={styles.photo}
								source={require('../../images/carter.png')} 
								/>
					</View>

					<View style={ styles.input }>
						<TouchableHighlight style={{ borderRadius: 25 }} 
							onPress={() => this.props.navigation.navigate('Followers')}
							onHideUnderlay={this._onHideUnderlayFollowers.bind(this)}
							onShowUnderlay={this._onShowUnderlayFollowers.bind(this)} >

							<View style={ this.state.pressStatusFollowers ? styles.pressButton : styles.styleTouchable }>
								<Text style={ this.state.pressStatusFollowers ? styles.pressText : styles.textInput }>Followers</Text>
								<Text style={ this.state.pressStatusFollowers ? styles.pressText : styles.textInput }>222</Text>
							</View>
						</TouchableHighlight>
					</View>

					<View style={ styles.input }>
						<TouchableHighlight style={{ borderRadius: 25 }} 
							onPress={() => this.props.navigation.navigate('Following')}
							onHideUnderlay={this._onHideUnderlayFollowing.bind(this)}
							onShowUnderlay={this._onShowUnderlayFollowing.bind(this)} >

							<View style={ this.state.pressStatusFollowing ? styles.pressButton : styles.styleTouchable }>
								<Text style={ this.state.pressStatusFollowing ? styles.pressText : styles.textInput }>Following</Text>
								<Text style={ this.state.pressStatusFollowing ? styles.pressText : styles.textInput }>222</Text>
							</View>
						</TouchableHighlight>
					</View>

					<View style={ styles.input }>
						<TouchableHighlight style={{ borderRadius: 25 }} 
							onPress={() => this.props.navigation.navigate('SubscriberFollowing')}
							onHideUnderlay={this._onHideUnderlayCelebrityFollowing.bind(this)}
							onShowUnderlay={this._onShowUnderlayCelebrityFollowing.bind(this)} >

							<View style={ this.state.pressStatusCelebrityFollowing ? styles.pressButton : styles.styleTouchable }>
								<Text style={ this.state.pressStatusCelebrityFollowing ? styles.pressText : styles.textInput }>Subscriber Following</Text>
								<Text style={ this.state.pressStatusCelebrityFollowing ? styles.pressText : styles.textInput }>222</Text>
							</View>
						</TouchableHighlight>
					</View>

					<View style={ styles.input }>
						<TouchableHighlight style={{ borderRadius: 25 }} 
							onPress={() => this.props.navigation.navigate('CatcherFollowing')}
							onHideUnderlay={this._onHideUnderlayPhotos.bind(this)}
							onShowUnderlay={this._onShowUnderlayPhotos.bind(this)} >

							<View style={ this.state.pressStatusPhotos ? styles.pressButton : styles.styleTouchable }>
								<Text style={ this.state.pressStatusPhotos ? styles.pressText : styles.textInput }>Catcher Following</Text>
								<Text style={ this.state.pressStatusPhotos ? styles.pressText : styles.textInput }>222</Text>
							</View>
						</TouchableHighlight>
					</View>

					<View style={ styles.input }>
						<TouchableHighlight style={{ borderRadius: 25 }} 
							onPress={() => this.props.navigation.navigate('Photos', {
								id			 : params.id, 
								token		 : params.token,
								userInfo : params.userInfo,
								
							})}
							onHideUnderlay={this._onHideUnderlayActiveBidPhotos.bind(this)}
							onShowUnderlay={this._onShowUnderlayActiveBidPhotos.bind(this)} >

							<View style={ this.state.pressStatusActiveBidPhotos ? styles.pressButton : styles.styleTouchable }>
								<Text style={ this.state.pressStatusActiveBidPhotos ? styles.pressText : styles.textInput }>Photos</Text>
								<Text style={ this.state.pressStatusActiveBidPhotos ? styles.pressText : styles.textInput }>222</Text>
							</View>
						</TouchableHighlight>
					</View>

					<View style={ styles.input }>
						<TouchableHighlight style={{ borderRadius: 25 }} 
							onPress={() => this.props.navigation.navigate('SoldPhotos', {
								id			 : params.id, 
								token		 : params.token,
								userInfo : params.userInfo,
								
							})}
							onHideUnderlay={this._onHideUnderlaySoldPhotos.bind(this)}
							onShowUnderlay={this._onShowUnderlaySoldPhotos.bind(this)} >

							<View style={ this.state.pressStatusSoldPhotos ? styles.pressButton : styles.styleTouchable }>
								<Text style={ this.state.pressStatusSoldPhotos ? styles.pressText : styles.textInput }>Sold Photos</Text>
								<Text style={ this.state.pressStatusSoldPhotos ? styles.pressText : styles.textInput }>222</Text>
							</View>
						</TouchableHighlight>
					</View>

				</View>

				<BottomImage2 />

			</View>	
		)
	}
}


const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
		padding: 0,
		margin: 0,
	},
	
	container1 : {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#31cba5',
		// paddingLeft: 35,
		// paddingRight: 35,
		height: 80,
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
		marginLeft: -20,
	},

	photo: {
		borderWidth: 3,
		borderRadius: 50,
		borderColor: '#2293b5',
		width: 75,
		height: 75,
	},

	photoView: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -80,
		flexDirection: 'row',
	},

	location: {
		marginRight: -20,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
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
		marginTop: 17,
		borderRadius: 25,
	},

	styleTouchable: {
		paddingBottom: 10,
		paddingTop: 10,
		paddingRight: 25,
		paddingLeft: 25,
		borderRadius: 25,
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},

	pressButton: {
		paddingBottom: 10,
		paddingTop: 10,
		paddingRight: 25,
		paddingLeft: 25,
		borderRadius: 25,
		backgroundColor: '#1e94b2',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	textInput: {
		fontSize: 14,
		color: '#1d94b2',
	},

	pressText: {
		fontSize: 14,
		color: '#ffffff',
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
	},

	star: {
		width: 10,
		height: 10,
		marginLeft: 3,
		marginTop: 3,
		zIndex: 1,
	},

	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#13b28a',
		width: 50,
	},

	personPlus: {
		marginRight: 5,
		width: 8,
		height: 8,
	},

	followText: {
		color: 'white',
		fontSize: 8,
	},

});
