import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button, 
} from 'react-native';
import * as firebase from "firebase";

const logInStyles = StyleSheet.create({
	logInView: {
		flex: 1,
		backgroundColor: '#eeeeee',
		alignItems: 'flex-start',
		paddingTop: 100,
		paddingHorizontal: 40,
	},
	logInInput: {
		backgroundColor: '#ccc9',
		borderRadius: 2,
		width: 300,
		height: 40,
		marginBottom: 40,
	},
});

export default class extends Component {
	constructor() {
		super();
		this.state = {
			email:'',
			password:'',
		};
		this.logInAction = this.logInAction.bind(this);
		this.signInAction = this.signInAction.bind(this);
	}

	logInAction() {
		const { email, password } = this.state;
		
		if(email === '' || password === '') {
			// TODO: Handle this case
			return;
		}

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(error => console.warn(error));
	}

	signInAction() {
		const { email, password } = this.state;
		if(email === '' || password === '') {
			// TODO: Handle this case
			return;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => console.warn(firebase.auth().currentUser))
			.catch(error => {
				console.warn(error);
			});
	}

	render() {
		return (
		<View
			style={logInStyles.logInView}
		>
			<Text>Email</Text>
			<TextInput
				style={logInStyles.logInInput}
				onChangeText={(email)=>this.setState({email})}
			/>
			<Text>Password</Text>
			<TextInput
				style={logInStyles.logInInput}
				secureTextEntry
				autoCorrect={false}
				autoCapitalize="none"
				onChangeText={(password)=>this.setState({password})}
			/>
			<Button
				title="Log In"
				onPress={this.logInAction}
			/>
			<Button
				title="Sign In"
				onPress={this.signInAction}
			/>
		</View>
		);
	}
}
