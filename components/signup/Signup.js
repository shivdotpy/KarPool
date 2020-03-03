import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { Item, Label, Input, H1, Button, H3 } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signup = (props) => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	/**
	 * Signup user
	 */
	const signup = () => {
		console.log('name', name);
		console.log('email', email);
		console.log('password', password);

		const body = {
			name,
			email,
			password
		};

		console.log(props)

		props.navigation.navigate('SignupSuccess')

		// fetch('https://api.github.com/gists', {
		// 	method: 'post',
		// 	body: JSON.stringify(body)
		// })
		// 	.then((response) => response.json())
		// 	.then(function(data) {
		// 		console.log(data);
		// 	});
	};

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" hidden={false} backgroundColor="#ffffff" translucent={true} />
			<View
				style={{
					paddingHorizontal: 50,
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<H1 style={{ color: 'white', alignSelf: 'center', marginBottom: 10, fontWeight: '400' }}>Car Pool</H1>
				<Item style={{ marginHorizontal: 5 }}>
					<Input
						style={{ color: 'white' }}
						placeholder="Name"
						placeholderTextColor="white"
						value={name}
						onChange={(event) => {
							setName(event.nativeEvent.text);
						}}
					/>
				</Item>
				<Item style={{ marginHorizontal: 5 }}>
					<Input
						style={{ color: 'white' }}
						placeholder="E mail"
						placeholderTextColor="white"
						value={email}
						onChange={(event) => {
							setEmail(event.nativeEvent.text);
						}}
					/>
				</Item>
				<Item style={{ marginHorizontal: 5 }}>
					<Input
						style={{ color: 'white' }}
						placeholder="Password"
						secureTextEntry={true}
						placeholderTextColor="white"
						value={password}
						onChange={(event) => {
							setPassword(event.nativeEvent.text);
						}}
					/>
				</Item>
				<TouchableOpacity>
					<Button rounded light style={styles.signupBtn} onPress={signup}>
						<H3 style={styles.signupBtnTxt}>Sign Up</H3>
					</Button>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { backgroundColor: '#CC1D1D', height: '100%' },
	signupBtn: { padding: 20, margin: 20 },
	signupBtnTxt: { color: 'red', fontWeight: 'bold' }
});

export default Signup;
