import React from 'react';
import { Container, Icon, Content, Item, Input, View, Button } from 'native-base';
import { StyleSheet, Text } from 'react-native';

const Signup = () => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>CAR POOL</Text>
			</View>
			<View style={styles.marginTop10}>
				<Item rounded style={{ width: '80%' }}>
					<Icon active type="MaterialCommunityIcons" name="account" />
					<Input placeholder="Full Name" />
				</Item>
			</View>
			<View style={styles.marginTop10}>
				<Item rounded style={{ width: '80%' }}>
					<Icon active type="FontAwesome5" name="envelope" />
					<Input placeholder="E-Mail" />
				</Item>
			</View>
			<View style={styles.marginTop10}>
				<Item rounded style={{ width: '80%' }}>
					<Icon type="FontAwesome5" name="lock" />
					<Input placeholder="Password" secureTextEntry={true} />
				</Item>
			</View>
			<View style={styles.marginTop20}>
				<Button rounded style={styles.pHorizontal10}>
					<Text style={styles.textWhite}>SignUp</Text>
				</Button>
			</View>
		</View>
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
