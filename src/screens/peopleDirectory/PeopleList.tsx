import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Image, Pressable, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getAPI, searchPeople } from '../../redux/actions';
import styles from './style';
import { handleColor, handleCardType } from '../../utils/Helper';
import { COLORS } from '../../components/Colors';
import renderLoader from '../../components/Loader';
import ListView from '../../components/ListView';

interface RootState {
    peopleReducer: {}
}


export default function PeopleList({ navigation }: { navigation: any }) {

    const cardList: {} = useSelector((state: RootState) => state.peopleReducer);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [loader, setLoader] = useState(true);
        
    useEffect(() => {

        fetchPeople();
    }, [])

    const sortCardList = () => {
        cardList?.people.sort((a: {}, b: {}) => a.name.localeCompare(b.name))
        const sortedList: [] = cardList?.people;
        return sortedList;
    }

    const handleSearch = () => {
        dispatch(searchPeople(searchTerm));
        setSearchTerm('');
        setLoader(false);
    }

    const fetchPeople = () => {
        dispatch(getAPI());
        setLoader(false);
    }




    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 12, backgroundColor: '#fff' }}>
            {loader ? renderLoader()
                :
                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                        <TextInput
                            value={searchTerm}
                            placeholder={'Search for a Card by first name'}
                            style={{ borderColor: COLORS.borderColor, height: 40, width: 250, borderRadius: 5, borderWidth: 1, padding: 5, marginHorizontal: 10, marginVertical: 20, fontSize: 16 }}
                            onChangeText={(text) => { setSearchTerm(text) }}
                        />
                        <Pressable
                            style={styles.searchButton}
                            onPress={handleSearch}>
                            <Text style={{ textAlign: 'center', color: COLORS.white }}>Search</Text>
                        </Pressable>

                    </View>

                    {cardList?.people.length > 0 ?
                        <FlatList
                            data={sortCardList()}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <ListView navigation={navigation} item={item} />
                            }
                        />
                        :
                        <View style={{ alignContent: 'center', marginTop: 20, justifyContent:'center' }}>
                            {renderLoader()}
                        </View>
                    }
                </>
            }
        </SafeAreaView >

    );

}
