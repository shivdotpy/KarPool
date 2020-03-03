import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { Item, Label, Input, H1, Button, H3, H2 } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
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
				<Item style={{ margin: 10 }}>
					<Input style={{ color: 'white' }} placeholder="E mail" placeholderTextColor="white" />
				</Item>
				<Item style={{ margin: 10 }}>
					<Input
						style={{ color: 'white' }}
						placeholder="Password"
						secureTextEntry={true}
						placeholderTextColor="white"
					/>
				</Item>
				<TouchableOpacity>
					<Button rounded light style={styles.signupBtn}>
						<H3 style={styles.signupBtnTxt}>Login</H3>
					</Button>
				</TouchableOpacity>
                <Text style={styles.textWhite}>New User? Register</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { backgroundColor: '#CC1D1D', height: '100%' },
	signupBtn: { padding: 20, margin: 20 },
    signupBtnTxt: { color: 'red', fontWeight: 'bold' },
    textWhite: {color: '#ffffff'}
});

export default Login;
