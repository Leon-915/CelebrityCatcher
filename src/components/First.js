import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';

export default class First extends Component {
	
    render(){
        return(
					<View style={styles.container}>
						

						<ImageBackground style={styles.bg}
							source={require('../images/loading-bg.png')}
							resizeMode='stretch' >

							<Progress.Circle style={styles.progressCircle} size={30}  indeterminate={true} />
										
						</ImageBackground>	
						
					</View>
				)
    }
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	bg: {
		justifyContent: 'center',
		alignItems: 'center',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},

	progressCircle: {
		
	}	
})
