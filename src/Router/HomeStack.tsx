import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../screens/HomeScreen'
import Feather from 'react-native-vector-icons/Feather'
import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from '../screens/ProductScreen/ProductScreen'

type HeaderComponentProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const HeaderComponent = ({ searchValue, setSearchValue }: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#22e3dd' }}>
      <View style={{ margin: 10, padding: 5, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 8 }}>
        <TextInput style={{ height: 30 }} placeholder="Search..." value={searchValue} onChangeText={setSearchValue} />
        <Feather name='search' size={24} style={{ color: 'gray' }} />
      </View>
    </SafeAreaView>
  )
}
const Stack = createStackNavigator()
const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator screenOptions={{ header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} /> }}>
      <Stack.Screen name="HomeScreen" options={{ title: 'Home' }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductScreen" />
    </Stack.Navigator>
  )
}

export default HomeStack