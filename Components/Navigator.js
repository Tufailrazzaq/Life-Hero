import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { AdminLogin } from './AdminLogin';
import { UserLogin } from './UserLogin';


const AppTabNavigator = createMaterialTopTabNavigator(
	{
        AdminLogin: {
			screen: AdminLogin,
			navigationOptions: {
                header: null,
                tabBarLabel:'Ambulance'
			}
		},
        UserLogin: {
            screen: UserLogin,
			navigationOptions: {
                header: null,
                tabBarLabel:'User'
			}
		},
			
	},
	{
        initialRouteName: 'AdminLogin',
        tabBarOptions:{
            activeTintColor:'white',
            inactiveTintColor:'white',
            showIcon:false,
            showLabel:true,
            iconStyle:{height:24,width:24},
            tabStyle:{backgroundColor:'#ee5253'}
        }
	}
);

const MainNavigator = createAppContainer(AppTabNavigator);

export default MainNavigator;