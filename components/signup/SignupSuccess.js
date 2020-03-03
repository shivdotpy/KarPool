import React, { useState } from 'react';
import { Item, View, Text, Button, H3, Input } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { VALIDATE_OTP_SIGNUP_END_POINT } from '../../utils/constants';

const SignupSuccess = (props) => {
	const [ OTP, setOTP ] = useState('');

	const validateOtp = () => {
		fetch(VALIDATE_OTP_SIGNUP_END_POINT, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => response.json())
			.then((json) => props.navigation.navigate('Login'));
		props.navigation.navigate('Login');
	};

	return (
		<View style={styles.container}>
			{/* <Image style={{ height: 150, width: 150 }} source={require('../../assets/signupSuccess.png')} /> */}
			{/* <Text style={styles.successTxt}>Your account has been created successfully.</Text> */}

			<View style={{ width: '50%', marginTop: 50 }}>
				<Item>
					<Input
						placeholder="OTP"
						keyboardType="numeric"
						style={{ fontSize: 30, textAlign: 'center', color: 'white' }}
						placeholderTextColor="white"
						value={OTP}
						onChange={(event) => {
							setOTP(event.nativeEvent.text);
						}}
					/>
				</Item>
			</View>
			<TouchableOpacity>
				<Button
					light
					rounded
					style={styles.goToLoginBtn}
					onPress={() => {
						validateOtp();
					}}
				>
					<H3 style={styles.goToLoginBtnTxt}>Submit OTP</H3>
				</Button>
			</TouchableOpacity>
			<Text style={styles.successTxt}>Please check your email for OTP.</Text>
			<Text style={styles.successTxt}>
				Didn't recived OTP? <Text style={{ fontSize: 20, color: 'white' }}>Resend</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { backgroundColor: '#CC1D1D', height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' },
	successTxt: { color: 'white', marginTop: 20 },
	goToLoginBtn: { padding: 10, marginTop: 20 },
	goToLoginBtnTxt: { color: 'red', fontWeight: 'bold' }
});

export default SignupSuccess;
