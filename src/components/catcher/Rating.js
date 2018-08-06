import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions } from 'react-native';
import BottomImage3 from '../BottomImage3';


export default class Rating extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Photo Details',
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

	render() {
		return(
			<View style={styles.container}>
				<View style={{marginTop: -50}} >
					<Text style={styles.text}>Rate this Photo!</Text>
							
					<View style={styles.starView}>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
					</View>
	
					<Text style={styles.text}>Rate this Celebrity!</Text>
								
					<View style={styles.starView}>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
						<Image style={styles.star}
							source={require('../../images/star-2.png')}	/>
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
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		color: '#4ba9c5',
		fontSize: 20,
		textAlign: 'center',
		justifyContent: 'center',
		
	},

	starView: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 15,
		marginBottom: 40,
		
	},

	star: {
		width: 30,
		height: 30,
		marginLeft: 10,
		zIndex: 1,
	}

	
});
