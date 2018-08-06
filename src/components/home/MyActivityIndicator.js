import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Home from './Home';

class MyActivityIndicator extends Component {
   state = { animating: true }

  closeActivityIndicator = () => {
		setTimeout((function() {
			<Home />		
 	  }) , 6000)
	}

   componentDidMount = () => this.closeActivityIndicator()
   render() {
      const animating = this.state.animating
      return (
         <View style = {styles.container}>
				 		<Image style={{}}
										 source={require('../../images/loading-bg.png')} />
									 
            <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>

						<Text>test</Text>

						
         </View>
      )
   }
}
export default MyActivityIndicator

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})