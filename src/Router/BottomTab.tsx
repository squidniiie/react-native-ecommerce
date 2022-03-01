import { View, Text } from 'react-native'
import React from 'react'
import HomeStack from './HomeStack'
import HomeScreen from '../screens/HomeScreen'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator()
const BottomTab = () => {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{
            showLabel: false, inactiveTintColor: '#ffbd7d',
            activeTintColor: '#e47911',
        }}>
            <Tab.Screen component={HomeStack} name="Home"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Entypo name='home' color={color} size={28} />),
                }}
            />
            <Tab.Screen component={HomeScreen} name="Profile"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Entypo name='user' color={color} size={28} />),
                }} />
            <Tab.Screen component={CartStack} name="Shopping Cart"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Entypo name='shopping-cart' color={color} size={28} />),
                }} />
            <Tab.Screen component={HomeScreen} name="More"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Entypo name='menu' color={color} size={28} />),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTab