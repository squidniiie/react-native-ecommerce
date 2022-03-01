import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
interface QuantityProps {
    quantity: number;
    setQuantity: any;
}
const QuantitySelector = ({ quantity, setQuantity }: QuantityProps) => {
    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1));
    }
    const onAdd = () => {
        setQuantity(quantity + 1);
    }
    return (
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable style={styles.button} onPress={onAdd}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#e3e3e3',
    },
    button: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
    },
    buttonText: {},
    quantity: {

    }
})
export default QuantitySelector