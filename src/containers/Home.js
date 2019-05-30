import React, {Component} from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet,
} from 'react-native';
import * as firebase from "firebase";

const homeStyles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 60,
		marginBottom: 20,
		color: '#000',
	},
});

export default class extends Component {
	render() {
    return (
			<View style={homeStyles.container}>
				<Text
					style={homeStyles.title}
				> MyApp </Text>
				<View style={{justifyContent: "space-around", height: 200}}>
					<Button
						title="Details"
						onPress={()=>this.props.navigation.navigate('Details')}
					/>
					<Button
						title="Log Out"
						onPress={()=>{
							firebase
								.auth()
								.signOut()
								.then(() =>this.props.navigation.navigate('AuthLoading'));
						}}
					/>
				</View>
			</View>
    );
  }
}
