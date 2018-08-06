import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground, Dimensions } from 'react-native';

import BottomImage from '../BottomImage';


export default class CatcherAuction extends Component {
	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Auction',
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
	  //   <TouchableOpacity onPress={ () => this.props.navigation.navigate('Celebrities') }>
	  //       <Image style={{width: 13, height: 13, marginLeft: 25}} source={ require('../../images/option-icon.png') }/>
	  //   </TouchableOpacity>
		// ),
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
					<TouchableOpacity style={{}} onPress={() => this.props.navigation.navigate('CatcherCreateAuction')}>
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
