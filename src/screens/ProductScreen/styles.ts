import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white'
    },
    title: {
        color: 'grey'
    },
    image: {},
    description: {
        marginVertical: 10,
        lineHeight: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontWeight: 'normal',
        fontSize: 14,
        textDecorationLine: 'line-through'

    },
})

export default styles;