import React from 'react';
import { View, Text, Button, H3 } from 'native-base';
import { Image, StyleSheet } from 'react-native';

const SignupSuccess = (props) => {
	return (
		<View style={styles.container}>
			<Image style={{ height: 150, width: 150 }} source={require('../../assets/signupSuccess.png')} />
			<Text style={styles.successTxt}>Your account has been created successfully.</Text>
			<Button light rounded style={styles.goToLoginBtn}>
				<H3 style={styles.goToLoginBtnTxt}>Go to login</H3>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { backgroundColor: '#CC1D1D', height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' },
	successTxt: { color: 'white', margin: 20 },
	goToLoginBtn: { padding: 10 },
	goToLoginBtnTxt: { color: 'red', fontWeight: 'bold' }
});

export default SignupSuccess;
