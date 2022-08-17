import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native'
import PeopleList from '../screens/peopleDirectory/PeopleList';


export default function StackNav() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="People Directory" component={PeopleList} />
        </Stack.Navigator>
    )
}

