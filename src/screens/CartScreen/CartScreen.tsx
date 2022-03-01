import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CartProductItem from '../../components/Cart/CartProductItem'
import products from '../../data/cart'
import Buttons from '../../components/Buttons/Buttons'


const CartScreen = () => {
    const navigation = useNavigation();
    const totalPrice = products.reduce((summedPrice, product) =>
        (summedPrice + product.item.price * product.quantity), 0)

    const onCheckout = () => {
        navigation.navigate('Address');
    }
    return (
        <SafeAreaView style={styles.page}>
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 16, }}>Subtotal ({products.length} items): <Text style={{ fontWeight: 'bold', color: '#e47911' }}>${totalPrice.toFixed(2)}</Text></Text>
            </View>
            <Buttons text="Proceed to checkout"
                onPress={onCheckout} containerStyles={{ backgroundColor: '#f7e300' }} />
            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <CartProductItem cartItem={item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
})

export default CartScreen;