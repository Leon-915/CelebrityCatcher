import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class BottomImage extends Component {
    render(){
        return(
					<View style={styles.container}>
						<Image style={{width: Dimensions.get('window').width, height: 100}}
							source={require('../images/first-bottom-bg.png')} 
							resizeMode="stretch" />
					</View>
				)
    }
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	}
})
