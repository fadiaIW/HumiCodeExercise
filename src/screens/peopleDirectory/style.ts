import { COLORS } from '../../components/Colors';
import { StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({

    containerStyle: {
        marginVertical: 5,
        marginHorizontal: 8,
        borderRadius: 20,
        // backgroundColor: cardType === 'Spell' ? '#4AB5A6' : cardType === 'Trap' ? '#BC5C8F' : cardType === 'Monster' ? '#C1855E' : '#fff',
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
    }

})

export default styles;