import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class BottomImage3 extends Component {
    render(){
        return(
					<View style={styles.bgView}>
						<Image style={{ width: Dimensions.get('window').width, height: 100}}
							source={require('../images/bottom-bg-3.png')} 
							resizeMode="stretch" />
					</View>
				)
    }
}

const styles = StyleSheet.create({
	bgView : {
		position: 'absolute',
		bottom: 0,
	}
})
