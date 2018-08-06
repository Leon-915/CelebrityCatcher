import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class BottomImage2 extends Component {
    render(){
        return(
					<View style={styles.bgView}>
						<Image style={{ width: Dimensions.get('window').width, height: 50}}
							source={require('../images/bottom-bg-2.png')} 
							resizeMode="stretch" />
					</View>
				)
    }
}

const styles = StyleSheet.create({
	bgView : {
		justifyContent: 'flex-end',
		position: 'absolute', 
		bottom: 0
	}
})
