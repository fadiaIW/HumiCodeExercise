import { COLORS } from '../../components/Colors';
import { StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({

    containerStyle: {
        marginVertical: 5,
        marginHorizontal: 8,
        borderRadius: 20,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    titleStyle:{
        fontSize: 15, 
        paddingRight: 6 , 
        fontWeight:'bold',
        color: COLORS.white
    },
    typeStyle:{
        fontSize: 12, 
        color: COLORS.white, 
        fontWeight:'500'
    },
    infoStyle:{
        fontSize: 10, 
        textAlign: 'right',
        color: COLORS.white,
        fontWeight:'500'
    },
    descriptionBox:{
        marginTop: 40,
        marginHorizontal: 15,
        padding:20,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor:'rgba(255,255,255,0.7)'

    }

})

export default styles;