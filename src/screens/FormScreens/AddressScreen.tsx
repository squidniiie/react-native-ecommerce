import { View, Text, StyleSheet, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import countryList from 'country-list'
import Buttons from '../../components/Buttons/Buttons'


const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('Invalid Address');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const onCheckout = () => {
    if (!!addressError) {
      Alert.alert('Please check all field errors before submission');
      return;
    }
    if (!fullname) {
      Alert.alert('Please fill in full name');
      return;
    }
    if (!phone) {
      Alert.alert('Please fill in phone number');
      return;
    }
    console.warn('Successful Checkout');
  }
  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address must be more than 3 characters')
    }
  }
  return (
    <ScrollView style={styles.root}>
      <View style={styles.row}>
        <Picker
          selectedValue={country}
          onValueChange={setCountry}
        >
          {countries.map((country) => (
            <Picker.Item value={country.code} label={country.name} />
          ))}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Full name (First and Last)</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullname}
          onChangeText={setFullname} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="no spaces or symbols"
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Street Address"
          value={address}
          onEndEditing={validateAddress}
          onChangeText={(text) => { setAddress(text); setAddressError('') }} />
        {!!addressError && (<Text style={styles.error}>{addressError}</Text>)}
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          value={zipcode}
          onChangeText={setZipcode} />
      </View>
      {/* <View>
        <SelectDropdown
          data={states}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
      </View> */}
      <Buttons text="Checkout" onPress={onCheckout} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 5,

  },
  error: { color: 'red' },
})

export default AddressScreen