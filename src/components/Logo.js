import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component {
    render(){
        return(
					<View style={styles.container}>
						<Image style={{width: 230, height: 60, marginBottom: 50}}
									 source={require('../images/Iam.png')}
									 resizeMode="contain" />	
					</View>
				)
    }
}

const styles = StyleSheet.create({
	container : {
		
	}
})
