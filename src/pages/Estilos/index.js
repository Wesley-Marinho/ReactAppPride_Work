import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    button: {
       width:150,
       height:63,
       borderRadius: 50,
       position: 'absolute',
       right:104,
       bottom:200,
      backgroundColor:'#9B7FB7'
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnMsg:{
        width:63,
        height:63,
        borderRadius: 50,
        position: 'absolute',
        right:20,
        bottom:20,
       backgroundColor:'#9B7FB7'
    },
    imgMSG:{
        width:36,
       height:31.5,
    },
    txt:{
        fontSize: 19,
        color: "#FFFFFF",
        fontFamily:"Roboto"
    }
})