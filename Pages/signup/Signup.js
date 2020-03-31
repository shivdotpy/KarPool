import React, { useState } from 'react';
import { Container, Icon, Content, Item, Input, View, Button } from 'native-base';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { SIGNUP_API_END_POINT } from '../../utils/constants';

const Signup = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const signup = () => {
		const body = {
			name,
			email,
			password
		};

		fetch(SIGNUP_API_END_POINT, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => {
				console.log(response.status);
				return response.json();
			})
			.then((json) => {
				// props.navigation.navigate('SignupSuccess');
				console.log(json);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		// <KeyboardAwareScrollView>
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>CAR POOL</Text>
			</View>
			<View style={styles.marginTop10}>
				<Item rounded style={{ width: '80%' }}>
					<Icon active type="MaterialCommunityIcons" name="account" />
					<Input placeholder="Full Name" onChange={(event) => setName(event.nativeEvent.text)} />
				</Item>
			</View>
			<View style={styles.marginTop10}>
				<Item rounded style={{ width: '80%' }}>
					<Icon active type="FontAwesome5" name="envelope" />
					<Input placeholder="E-Mail" onChange={(event) => setEmail(event.nativeEvent.text)} />
				</Item>
			</View>
			<View style={styles.marginTop10}>
				<Item rounded style={{ width: '80%' }}>
					<Icon type="FontAwesome5" name="lock" />
					<Input
						placeholder="Password"
						secureTextEntry={true}
						onChange={(event) => setPassword(event.nativeEvent.text)}
					/>
				</Item>
			</View>
			<View style={styles.marginTop20}>
				<Button rounded style={styles.pHorizontal10} onPress={signup}>
					<Text style={styles.textWhite}>SignUp</Text>
				</Button>
			</View>
		</View>
		// </KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 20
	},
	marginTop10: {
		marginTop: 10
	},
	marginTop20: {
		marginTop: 20
	},
	pHorizontal10: {
		paddingHorizontal: 50
	},
	textWhite: {
		color: 'white'
	}
});

export default Signup;
