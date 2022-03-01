import { SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ProductItem from '../components/Products/ProductItem';
import Products from '../data/products';


const HomeScreen = ({ searchValue }: { searchValue: string }) => {
    console.log(searchValue)
    return (
        <SafeAreaView style={styles.page}>
            <FlatList data={Products}
                renderItem={({ item }) =>
                    <ProductItem item={item} />}
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

export default HomeScreen