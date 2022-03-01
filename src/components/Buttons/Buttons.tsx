import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
interface ButtonProps {
    text: string,
    onPress: () => void;
    containerStyles?: object;
}
const Buttons = ({ text, onPress, containerStyles }: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        margin: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Buttons