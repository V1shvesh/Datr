import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
} from 'react-native';
import * as firebase from "firebase";

import Button from "../components/Button";

const authStyles = StyleSheet.create({
	authView: {
		flex: 1,
		backgroundColor: '#eeeeee',
		alignItems: 'flex-start',
		paddingTop: 100,
		paddingHorizontal: 40,
	},
	authInput: {
		width: 300,
		height: 40,
		marginBottom: 40,
		paddingLeft: 10,
		fontSize: 18,
		backgroundColor: '#ccc9',
		borderRadius: 5,
	},
	authBtn: {
		alignSelf: 'center',
		width: 150,
		marginVertical: 15,
		borderRadius: 5,
	}
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
			console.warn("Empty");
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
			console.warn("Empty");
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
			style={authStyles.authView}
		>
			<Text>Email</Text>
			<TextInput
				style={authStyles.authInput}
				onChangeText={(email)=>this.setState({email})}
			/>
			<Text>Password</Text>
			<TextInput
				style={authStyles.authInput}
				secureTextEntry
				autoCorrect={false}
				autoCapitalize="none"
				onChangeText={(password)=>this.setState({password})}
			/>
			<Button
				title="Log In"
				style={authStyles.authBtn}
				onPress={this.logInAction}
			/>
			<Button
				title="Sign In"
				style={authStyles.authBtn}
				onPress={this.signInAction}
			/>
		</View>
		);
	}
}
