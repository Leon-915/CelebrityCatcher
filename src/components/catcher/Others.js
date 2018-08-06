import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, NavigationBar, ImageBackground, Dimensions } from 'react-native';
import BottomImage2 from '../BottomImage2';

export default class Others extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
    title: 'Others',
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
		
	  headerTintColor: 'white'
  });

	constructor(props) {
    super(props)
    this.state = {
				visibleModal: false,
				
    }
	}

	
	render() {
		return(
			<View style={styles.container}>

				<View style={styles.container1}>
					<View style={styles.imageView}>
						<Image style={styles.personImage}
								source={require('../../images/photo-1.png')}	/>
						
						<Image style={styles.personImage}
							source={require('../../images/photo-2.png')}	/>

						<Image style={styles.personImage}
								source={require('../../images/photo-3.png')}	/>
					</View>

					<View style={styles.imageView}>
						<Image style={styles.personImage}
								source={require('../../images/photo-4.png')}	/>
						
						<Image style={styles.personImage}
							source={require('../../images/photo-5.png')}	/>

						<Image style={styles.personImage}
								source={require('../../images/photo-6.png')}	/>
					</View>

					<View style={styles.imageView}>
						<Image style={styles.personImage}
								source={require('../../images/photo-7.png')}	/>
						
						<Image style={styles.personImage}
							source={require('../../images/photo-8.png')}	/>

						<Image style={styles.personImage}
								source={require('../../images/photo-9.png')}	/>
					</View>

					<View style={styles.imageView}>
						<Image style={styles.personImage}
								source={require('../../images/photo-10.png')}	/>
						
						<Image style={styles.personImage}
							source={require('../../images/photo-11.png')}	/>

						<Image style={styles.personImage}
								source={require('../../images/photo-12.png')}	/>
					</View>

					<ImageBackground style={{marginTop: 15}}
							source={require('../../images/button-bg-3.png')}>
						<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('UploadPhoto')}>
							<Image style={{height: 16, width: 20, marginTop: 15}}
								source={require('../../images/photography-2.png')}	/>
							<Text style={styles.buttonText}>UPLOAD A PHOTO</Text>
						</TouchableOpacity>
					</ImageBackground>
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
	},

	container1: {
		flex: 5,
		alignItems: 'stretch',
		paddingTop: 30,
		paddingLeft: 25,
		paddingRight: 25,
	},

	imageView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 5,
		
	},

	personImage: {
		width: Dimensions.get('window').width / 3 - 22,
		height: Dimensions.get('window').width / 3 - 22,
		borderColor: '#edecea',
		borderRadius: 5,
	},

	leftArrowImage: {
		width: 50,
		height: 40,
	},

	modalbg: {
		flex: 1,
		backgroundColor: 'transparent',
    justifyContent: 'flex-start',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},

	modalContent: {
		flex: 1,
		opacity: 1,
		zIndex: 1,
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
		fontSize: 12,
		marginTop: 2,
	},

	modalItemView: {
		alignItems: 'stretch',
		borderTopWidth: 1,
		borderColor: '#8ec4d0',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
	},

	photo: {
		borderWidth: 5,
		borderRadius: 50,
		borderColor: '#2293b5',
		width: 75,
		height: 75,
		marginTop: 30,
		
	},

	button: {
		justifyContent: 'center',
		borderRadius: 5,
		flexDirection: 'row',
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 13,
		paddingTop: 13,
		color: 'white',
		fontWeight: 'bold',
		marginLeft: 10,
	},

	optionImage: {
		width: 40,
		height: 40,
	},

	
});
