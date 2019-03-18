import React,{ Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, Alert } from 'react-native';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import {Input, Button, Item} from 'native-base';
import styles from './Styles/Styles';
import colors from './Styles/Colors';

class LoginScreen extends Component{

    constructor(){
        super();
        this.state = {
            status:'failed'
        }
    }

    authenticateLogin = () => {
        let user = {
            username:'admins',
            password:'admin'
        }
        
    } 

    render(){

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

        const {
            blue,
            red,
            grey,
            lightGrey,
            mediumGrey,
            fbBlue
        } = colors;

        return(
            <View style={container}>
                <StatusBar backgroundColor={blue}/>
                <View style={logoView}>
                    <Image source={require('./Images/playstationlogo.png')} style={logoStyle}/>
                    <Text style={[btnTextStyle,{fontSize:26, fontWeight:'bold', position:'relative', bottom:80}]}>PlayStation</Text>
                </View>
                <View style={contentContainer}>
                    <View style={contentView}>
                        
                        <Item  style={{flexDirection:'row', paddingRight:10}}>
                            <Input
                                style={inputStyle}
                                placeholder={'Full Name'}
                                placeholderTextColor={mediumGrey}
                            />
                            <FontAwesomeI name={'user-o'} size={28} color={mediumGrey} style={iconStyle}/>
                        </Item>

                        <Item  style={{flexDirection:'row', paddingRight:10}}>
                            <Input
                                style={inputStyle}
                                placeholder={'Email'}
                                placeholderTextColor={mediumGrey}
                            />
                            <MaterialCommunityIconsI name={'email-outline'} size={30} color={mediumGrey} style={iconStyle}/>
                        </Item>

                        <Item  style={{flexDirection:'row', paddingRight:10}}>
                            <Input
                                style={inputStyle}
                                placeholder={'Password'}
                                placeholderTextColor={mediumGrey}
                            />
                            <MaterialIconsI name={'lock-outline'} size={30} color={mediumGrey} style={iconStyle}/>
                        </Item>
                        
                        <View style={{justifyContent:'center'}}>
                            <Button
                                block
                                style={[buttonStyle,{backgroundColor:blue}]}
                                onPress={() => this.authenticateLogin()}
                            >
                                <Text style={[btnTextStyle,{fontSize:18}]}>Sign Up</Text>
                            </Button>

                            <Button
                                block
                                style={[buttonStyle,{backgroundColor:fbBlue}]}
                            >
                                <Text style={[btnTextStyle,{fontSize:16}]}>Sign Up with Facebook</Text>
                            </Button>
                        </View>
                        <Text style={{textAlign:'center'}}>Powered By Software House</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default LoginScreen;