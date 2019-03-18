import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, Alert } from 'react-native';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import { Input, Button, Item } from 'native-base';
import styles from './Styles/Styles';
import colors from './Styles/Colors';

export class UserLogin extends Component {
	constructor() {
		super();
		this.state = {
			status: 'failed',
			username: '',
			password: ''
		};
	}
	authenticateLogin = () => {
		if (this.state.username.toLowerCase() == 'user' && this.state.password.toLowerCase() == 'user') {
			Alert.alert(
				'Login Success',
				'My Alert Msg',
				[
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel'
					},
					{ text: 'OK', onPress: () => console.log('OK Pressed') }
				],
				{ cancelable: false }
			);
		} else {
			Alert.alert(
				'Login Failed',
				'My Alert Msg',
				[
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel'
					},
					{ text: 'OK', onPress: () => console.log('OK Pressed') }
				],
				{ cancelable: false }
			);
		}
	};

	render() {
		const {
			container,
			logoView,
			contentView,
			contentContainer,
			inputStyle,
			buttonStyle,
			btnTextStyle,
			logoStyle,
			iconStyle
		} = styles;

		const { blue, red, grey, lightGrey, mediumGrey, fbBlue } = colors;

		return (
			<View style={container}>
				<StatusBar backgroundColor={blue} />
				<View style={logoView}>
					<Image source={require('./Images/userlogo.png')} style={logoStyle} />
					<Text
						style={[ btnTextStyle, { fontSize: 26, fontWeight: 'bold', position: 'relative', bottom: 36 } ]}
					>
						User Login
					</Text>
				</View>
				<View style={contentContainer}>
					<View style={contentView}>
						<Item style={{ flexDirection: 'row', paddingRight: 10, marginBottom: 10 }}>
							<Input
								style={inputStyle}
								placeholder={'Username'}
								placeholderTextColor={mediumGrey}
								onChangeText={(value) => this.setState({ username: value })}
							/>
							<MaterialCommunityIconsI
								name={'email-outline'}
								size={30}
								color={mediumGrey}
								style={iconStyle}
							/>
						</Item>

						<Item style={{ flexDirection: 'row', paddingRight: 10, marginBottom: 20 }}>
							<Input
								style={inputStyle}
								placeholder={'Password'}
								placeholderTextColor={mediumGrey}
								onChangeText={(value) => this.setState({ password: value })}
							/>
							<MaterialIconsI name={'lock-outline'} size={30} color={mediumGrey} style={iconStyle} />
						</Item>

						<View style={{ justifyContent: 'center' }}>
							<Button
								block
								style={[ buttonStyle, { backgroundColor: blue } ]}
								onPress={() => this.authenticateLogin()}
							>
								<Text style={[ btnTextStyle, { fontSize: 18 } ]}>Login</Text>
							</Button>
						</View>
						<Text style={{ textAlign: 'center' }}>Powered By Software House</Text>
					</View>
				</View>
			</View>
		);
	}
}
