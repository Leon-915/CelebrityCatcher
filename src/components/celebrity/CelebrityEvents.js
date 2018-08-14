import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions, Platform } from 'react-native';

import BottomImage from '../BottomImage';


export default class CelebrityEvents extends Component {
	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Events',
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
					<Image style={{width: 35, marginRight: 10,}}
							source={require('../../images/face-icon.png')} 
							resizeMode="contain" />
					<Text style={{color: '#89b9cd', fontSize: 18}}>No auction to display</Text>
				</View>

				<View style={styles.container2}>
					<TouchableOpacity style={{}} onPress={() => this.props.navigation.navigate('CreateEvent')}>
						<Image style={{width: 55, marginRight: 10,}}
							source={require('../../images/plus-icon.png')} 
							resizeMode="contain" />
					</TouchableOpacity>
					
				</View>

				<BottomImage />
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
		flex: 2,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	container2 : {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
  },

});
