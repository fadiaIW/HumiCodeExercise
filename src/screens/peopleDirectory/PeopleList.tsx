import React, { useEffect } from 'react'
import { Text, View, FlatList, Image, Pressable, StyleSheet } from 'react-native'
import { CARD_INFO } from '../../apiService/Constants'
import { useSelector, useDispatch } from 'react-redux';
import { getAPI } from '../../redux/actions';
import styles from './style';
import { COLORS } from '../../components/Colors';
export default function PeopleList() {

    const cardList = useSelector(state => state.peopleReducer);
    const dispatch = useDispatch();

    // console.log('PEOPLE', people.people);


    useEffect(() => {
        fetchPeople();
    }, [])

    //check for card type string exists or not
    function stringExists(cardName: string, cardType: string) {
        const exists = cardName
            .split(/\s+|\./) // split words based on whitespace or a '.'
            .includes(cardType);
        return exists;
    }

    //returns card type
    function handleCardType(cardType) {
        if (stringExists(cardType, 'Monster')) {
            return 'Monster'
        } else if (stringExists(cardType, 'Spell')) {
            return 'Spell'
        } else if (stringExists(cardType, 'Trap')) {
            return 'Trap'
        } else return null;

    }

    const fetchPeople = () => {
        dispatch(getAPI());
    }

    return (
        <View style={{ flex: 1, paddingTop: 12, backgroundColor: '#fff' }}>
            <FlatList
                data={cardList.people}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    const IMAGE_URL = item.card_images[0].image_url_small;
                    const cardType = handleCardType(item.type);
                    return (
                        <Pressable style = {[styles.containerStyle, { backgroundColor: cardType === 'Spell' ? '#4AB5A6' : cardType === 'Trap' ? '#BC5C8F' : cardType === 'Monster' ? '#C1855E' : '#fff',}]}>
                                <View style={{ flex: 0.2, marginLeft: 15, marginRight:10 }}>
                                    <Image
                                        source={{ uri: IMAGE_URL }}
                                        resizeMode="contain"
                                        style={{ width: 50, height: 100, borderRadius: 0, alignSelf: 'center' }}
                                    />
                                </View>
                                <View style={{ flex: 1, marginLeft: 12, justifyContent: 'center' }}>
                                    <Text style={styles.titleStyle}>
                                        {item.name}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: 10,
                                            alignItems: 'center',
                                        }}>
                                        <Text style={ styles.typeStyle}>
                                            {item.type}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, marginLeft: 5, justifyContent: 'center', marginRight: 10 }}>
                                    {cardType === 'Spell' || cardType === 'Trap' ?
                                        <View >
                                            <Text style={{ fontSize: 10, textAlign: 'right' }}>
                                                {item.race}
                                            </Text>
                                        </View>
                                        :
                                        <View >
                                            <Text style={{ fontSize: 10, textAlign: 'right' }}>
                                                Level {item.level}
                                            </Text>
                                            <Text style={{ fontSize: 10, textAlign: 'right',paddingTop: 5 }}>
                                                ATK {item.atk}/{item.def} DEF
                                            </Text>
                                        </View>
                                    }

                                </View>
                        </Pressable>
                    );
                }}
                showsVerticalScrollIndicator={false}
            />
        </View >

    );

}
