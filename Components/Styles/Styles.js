import colors from './Colors';
import {Dimensions} from 'react-native';

const { blue, red, white, grey, lightGrey } = colors;
const {height, width} = Dimensions.get('window');

export default {
    container:{
        flex:1,
    },
    logoView:{
        flex:2,
        backgroundColor:blue,
        alignItems:'center',
        justifyContent:'center'
    },
    logoStyle:{
        height:100,
        width:100,
        //position:'relative',
        bottom:30
    },
    contentContainer:{
        flex:3,
        alignItems:'center',
    },
    contentView:{
        height:height * (2/3),
        width:width-50,
        position:'relative',
        bottom:80,
        backgroundColor:white,
        borderRadius:5,
        justifyContent:'center',
        paddingVertical: height < 600? 15 : 30,
        paddingHorizontal:20,
    },
    inputStyle:{
        paddingLeft:10
    },
    buttonStyle:{
        marginHorizontal:40,
        marginTop:5,
        marginBottom: height < 600? 5 : 15,
        borderRadius:50
    },
    btnTextStyle:{
        color:white
    },
    iconStyle:{
        //borderBottomWidth:1/2,
        //paddingBottom:5
    }


}

