import { View, Text } from 'react-native'
import React from 'react'
import CartScreen from '../screens/CartScreen/CartScreen'
import HeaderComponent from './HomeStack'
import { createStackNavigator } from '@react-navigation/stack'
import AddressScreen from '../screens/FormScreens/AddressScreen'

const Stack = createStackNavigator()
const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={CartScreen} name="Cart"
                options={{ title: ' Shopping Cart' }} />
            <Stack.Screen component={AddressScreen} name="Address" />
        </Stack.Navigator>
    )
}

export default CartStack