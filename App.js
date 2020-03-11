import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
// import Signup from './components/signup/Signup';
import Signup from './Pages/signup/Signup';
import Login from './components/login/Login';
import { createAppContainer } from 'react-navigation';
import SignupSuccess from './components/signup/SignupSuccess';

const RootStack = createStackNavigator(
	{
		Signup: { screen: Signup },
		Login: { screen: Login },
		SignupSuccess: { screen: SignupSuccess }
	},
	{
		initialRouteName: 'Signup',
		header: null,
		headerMode: 'none'
	}
);

const App = createAppContainer(RootStack);

export default App;
