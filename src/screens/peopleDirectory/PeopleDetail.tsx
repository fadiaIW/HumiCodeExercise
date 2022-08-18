import React, { useState, useEffect, Fragment } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../components/Colors';
import styles from './style';
import { handleColor } from '../../utils/Helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
MaterialCommunityIcons.loadFont();
export default function PeopleDetail({ route }: any) {

    const { item, cardType } = route.params;
    const cardSet: [] = item?.card_sets;
    console.log({cardSet});
    

    function CardSet() {
        return (
            <>
                {
                    cardSet?.map((item, i) => {
                        return (
                            <Fragment key={i}>
                                <View style = {{marginVertical:3, flexDirection:'row'}}>
                                    <MaterialCommunityIcons name = "newspaper-variant-outline" size={20} color={COLORS.headerText} />
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginLeft:10 }} >{item.set_name}</Text>
                                </View>
                            </Fragment>

                        )
                    })
                }
            </>
        )
    }

    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#fff' }}>
            <View style={{ justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', paddingVertical: 20 }} >
                    <Text style={[styles.titleStyle, { color: handleColor(cardType), fontSize: 20 }]}>{item?.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginBottom: 20, marginHorizontal: 10 }} >
                    {cardType === 'Monster' &&
                        <Text style={{ color: COLORS.headerText, fontSize: 15, fontWeight: '600', flex: 1 }}>Level {item?.level}</Text>
                    }
                    <Text style={{ color: COLORS.headerText, fontSize: 15, fontWeight: '600', textAlign: 'right', alignContent: 'flex-end', flex: 1 }}>Type: {item?.race}</Text>
                </View>
                <Image source={{ uri: item?.card_images[0].image_url }}
                    resizeMode={'contain'}
                    style={{ height: 220, width: 150, alignSelf: 'center' }}
                />
                <View style={{ justifyContent: "center", marginVertical: 20, marginHorizontal: 10 }} >
                    {cardType === 'Monster' &&
                        <Text style={{ color: COLORS.headerText, fontSize: 15, fontWeight: '600' }}>Attribute: {item?.attribute}</Text>
                    }
                </View>
            </View>
            <ScrollView style={{ flex: 1, borderRadius: 40, backgroundColor: handleColor(cardType), paddingBottom:40}}>
                <View style={styles.descriptionBox}>
                    <Text style={{ fontWeight: "bold", fontSize: 14, marginBottom: 10 }}>Description</Text>
                    <Text>{item.desc}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 20, marginHorizontal: 10 }} >
                    {cardType === 'Monster' &&
                        <Text style={{ color: COLORS.white, fontSize: 14, fontWeight: '600', textAlign: 'right', alignContent: 'flex-end', flex: 1 }}>ATK: {item?.atk}/DEF: {item?.def}</Text>
                    }
                </View>
                {cardSet?.length > 0 &&
                    <View style={[styles.descriptionBox, { marginTop: 0, }]}>
                        <Text style={{ fontWeight: "bold", fontSize: 14, marginBottom: 10 }}>Sets</Text>
                        <CardSet />
                    </View>
                }
            </ScrollView>
        </View>
    )
}