import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {ROUTES} from './routesNames'

import {Cashfree} from '../screens/views/cashfree'
import {ThreeAvatar} from '../screens/views/threeAvatar'

const Stack = createStackNavigator()

export const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES.CASHFREE}>
                <Stack.Screen name={ROUTES.CASHFREE} component={Cashfree} options={{headerShown: false}}/>
                <Stack.Screen name={ROUTES.AVATAR} component={ThreeAvatar} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}