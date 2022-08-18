import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleList from '../screens/peopleDirectory/PeopleList';
import PeopleDetail from '../screens/peopleDirectory/PeopleDetail';

export default function StackNav() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="People Directory" component={PeopleList} options={{headerShown:false}}/>
            <Stack.Screen name="PeopleDetail" component={PeopleDetail} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

