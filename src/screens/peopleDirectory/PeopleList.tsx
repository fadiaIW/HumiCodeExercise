import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Image, Pressable, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getAPI } from '../../redux/actions';
import styles from './style';
import { handleColor, handleCardType } from '../../utils/Helper';
import { COLORS } from '../../components/Colors';



export default function PeopleList({ navigation }: { navigation: any }) {

    const cardList: [] = useSelector(state => state.peopleReducer);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchPeople();
    }, [])



    const fetchPeople = () => {
        dispatch(getAPI());
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 12, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                <TextInput
                    value={searchTerm}
                    placeholder={'Search for a Card by first name'}
                    style={{ borderColor: COLORS.borderColor, height: 40, width: 250, borderRadius: 5, borderWidth: 1, padding: 5, marginHorizontal: 10, marginVertical: 20 }}
                    onChangeText={(text) => { setSearchTerm(text) }}
                />
                <Pressable style={{ flex: 1, height: 40, width: 50, backgroundColor: COLORS.monsterColor, marginVertical: 20, marginRight: 10, borderRadius: 5 }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ textAlign: 'center' }}>Search</Text>
                    </View>

                </Pressable>

            </View>
            <FlatList
                data={cardList.people}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    const IMAGE_URL = item.card_images[0].image_url_small;
                    const cardType = handleCardType(item.type);
                    return (
                        <Pressable
                            style={[styles.containerStyle, { backgroundColor: handleColor(cardType) }]}
                            onPress={() => { navigation.navigate('PeopleDetail', { item, cardType }) }}>
                            <View style={{ flex: 0.2, marginLeft: 15, marginRight: 10 }}>
                                <Image
                                    source={{ uri: IMAGE_URL }}
                                    resizeMode="contain"
                                    style={{ width: 50, height: 100, alignSelf: 'center' }}
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
                                    <Text style={styles.typeStyle}>
                                        {item.type}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.55, marginLeft: 5, justifyContent: 'center', marginRight: 10 }}>
                                {cardType === 'Spell' || cardType === 'Trap' ?
                                    <View >
                                        <Text style={styles.infoStyle}>
                                            {item.race}
                                        </Text>
                                    </View>
                                    :
                                    <View >
                                        <Text style={styles.infoStyle}>
                                            Level {item.level}
                                        </Text>
                                        <Text style={[styles.infoStyle, { paddingTop: 5 }]}>
                                            ATK {item.atk}/{item.def} DEF
                                        </Text>
                                    </View>
                                }

                            </View>
                        </Pressable>
                    );
                }}
            />
        </SafeAreaView >

    );

}
