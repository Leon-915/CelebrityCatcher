import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions, Platform } from 'react-native';
import BottomImage3 from '../BottomImage3';


export default class SubscirberSoldPhoto extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Sold Photo',
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

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.container1}>
					<View style={styles.imageView}>
						<Image style={styles.personImage}
								source={require('../../images/person2.png')}
								resizeMode='stretch'	/>
					</View>
					

					<View style={styles.item}>
							<Text style={styles.itemLeftText}>Photo Name</Text>
							<Text style={styles.itemRightText}>John Carter</Text>
					</View>

					<View style={{alignItems: 'center'}}>
						<ImageBackground style={{marginTop: 15, width: Dimensions.get("window").width / 2 + 20, 
							alignItems: 'center'}} 
							imageStyle={{ borderRadius: 5 }}
								source={require('../../images/button-bg.png')}>
							<TouchableOpacity style={styles.button} 
								onPress={ () => {this.setState({visibleModal: true})} } >
								<Text style={styles.buttonText}>NOT FOR SALE</Text>
							</TouchableOpacity>
						</ImageBackground>
					</View>
				</View>

				<BottomImage3 />
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
		paddingLeft: 30,
		paddingRight: 30,
	},

	imageView: {
		alignItems: 'center',
	},

	personImage: {
		borderColor: 'white',
		zIndex: 1,
		width: Dimensions.get('window').width - 50,
		height: 225,
		alignContent: 'center',
		marginBottom: 15,
		
	},

	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
		borderRadius: 30,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	itemLeftText: {
		color: '#4ba9c5',
		fontSize: 14,
		
	},

	itemRightText: {
		color: '#7bd8c6',
		fontSize: 14,
		
	},

	photo: {
		borderRadius: 30,
		marginRight: 15,
		width: 30,
		height: 30,
		marginTop: -5,
	},

	itemBottom: {
		paddingTop: 5,
		paddingBottom: 5,
		alignItems: 'center',
		backgroundColor: '#4792b2',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	
	itemBottomText: {
		color: 'white',
		fontSize: 12,
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

	
});
