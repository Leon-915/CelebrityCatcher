import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions, Platform } from 'react-native';
import Modal from 'react-native-modal';
import BottomImage from '../BottomImage';


export default class UploadPhoto extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Upload Photo',
	  headerTitleStyle: { 
	    textAlign: 'center', flex: 1, color: 'white', fontSize: 16, fontWeight: 'normal' 
	  },
	  headerStyle: {
	    height: 40,
	  },
	  headerLeft: <TouchableOpacity onPress={ () => {navigation.goBack()} } >
									<Image style={{width: 20, height: 15, marginLeft: 20 }} resizeMode="stretch"
										source={require('../../images/left-arrow.png')}	/>
								</TouchableOpacity>,
		headerRight: <View />,						
	  headerBackground: (
	    <Image resizeMode='stretch' style={ Platform.OS === "ios" ? {height: 60} : {}}
				source={require('../../images/nav-bg-2.png')} 
	    />
		),
	  headerTintColor: 'white'
	});

	constructor(props) {
    super(props)
    this.state = {
				visibleModal: false,
				
    }
	}

	upgradePhoto = () => {
		this.setState({visibleModal: false});
		this.props.navigation.navigate('UpgradePhoto');
	}

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.container1}>

					<View style={styles.input}>
						<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
						underlineColorAndroid='transparent' placeholder="Name of Photo" />
					</View>

					<View style={{alignItems: 'center', marginTop: 15}}>
						<View style={styles.upload}>
							<Image style={{width: 50}}
								source={require('../../images/upload-icon-2.png')} 
								resizeMode="contain" />
						</View>
					</View>
					
					<ImageBackground style={{marginTop: 15}} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
						<TouchableOpacity style={styles.button} 
							onPress={ () => {this.setState({visibleModal: true})} } >
							<Text style={styles.buttonText}>SAVE</Text>
						</TouchableOpacity>
					</ImageBackground>
					
				</View>

				<BottomImage />

				{/* ===  Modal === */}

				<Modal
					isVisible={this.state.visibleModal === true}
					animationIn={'slideInLeft'}
					animationOut={'slideOutLeft'}
					onRequestClose={ () => { this.setState({visibleModal: false})} }
					style={{marginLeft: 0, marginTop: 0, marginBottom: 0}} >

					<TouchableOpacity style={styles.modalbg} onPressOut={() => {this.setState({visibleModal: false})} }>
						<TouchableOpacity style={{marginTop: -220}} activeOpacity={1} >
							<ImageBackground style={styles.modalContent} 
								resizeMode='stretch'
								source={require('../../images/price-modal-bg.png')}>

								<Text style={styles.modalText} >Would you like to upgrade this photo for a better quality?</Text>

								<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }} >
									<TouchableOpacity style={styles.yesButton} 
										onPress={ this.upgradePhoto } >
										<Text style={{fontSize: 10, color: 'white'}} >Yes</Text>
									</TouchableOpacity>	 
									
									<TouchableOpacity style={styles.noButton} 
										onPress={ () => { this.setState({visibleModal: false})} } >
										<Text style={{fontSize: 10, color: 'white'}}>No</Text>
									</TouchableOpacity>	 
										
								</View>
							</ImageBackground>
						</TouchableOpacity>
					</TouchableOpacity>

				</Modal>

			</View>	
		)
	}
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
    flex: 1,
	},
	
	container1 : {
		flex: 7,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		paddingTop: 40,
	},

	input: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		marginTop: 15,
		justifyContent: 'space-between',
	},

	upload: {
		alignItems: 'center', 
		padding: 30,
		width: 100, 
		justifyContent: 'center',

		borderWidth: 1,
		borderColor: '#b9e2f4',
	},

	textInput: {
		width: 200,
		marginLeft: 10,
	},

	button: {
		justifyContent: 'center',
		borderRadius: 10,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	modalbg: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},

	modalContent: {
		width: Dimensions.get("window").width / 2 -10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 30,
	},

	modalText: {
		fontSize: 12,
		color: 'white',
		textAlign: 'center',
	},

	yesButton: {
		backgroundColor: '#ff3334',
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 3,
		marginRight: 7,
	},

	noButton: {
		backgroundColor: '#515151',
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 3,
		
	},

});
