import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions, Platform } from 'react-native';
import BottomImage3 from '../BottomImage3';


export default class Rating extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Rating',
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
