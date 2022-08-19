import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Image, Pressable, StyleSheet, SafeAreaView, TextInput, ListViewProps } from 'react-native'
import styles from '../screens/peopleDirectory/style';
import { handleCardType, handleColor } from '../utils/Helper';

interface ListViewProps {
    id: string,
    name: string,
    type: string,
    desc: string,
    race: string,
    archetype: string,
    card_sets: [{}],
    card_images: [{}],
    card_prices: [],



}

export default function ListView({ navigation, item }: { navigation: any, item: ListViewProps }) {
    const IMAGE_URL: string | null = item.card_images[0].image_url_small;
    const cardType: string | null = handleCardType(item.type);

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
    )

}