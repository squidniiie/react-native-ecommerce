import { View, FlatList, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(1)
    const windowWidth = useWindowDimensions().width;

    const onFlatListUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
        console.log(viewableItems);
    }, []);

    return (
        <ScrollView>
            <View style={styles.root}>
                <FlatList
                    data={images}
                    renderItem={({ item }) => (
                        <Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={windowWidth - 20}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    viewabilityConfig={{
                        viewAreaCoveragePercentThreshold: 50,
                        minimumViewTime: 300,
                    }}
                    onViewableItemsChanged={onFlatListUpdate}
                />
                <View style={styles.dots}>
                    {images.map((image, index) => (
                        <View style={[styles.dot, { backgroundColor: index === activeIndex ? '#c9c9c9' : '#e0e0e0' }]} />
                    ))}
                </View>

            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    root: {},
    image: {
        height: 250,
        resizeMode: 'contain',
        margin: 10
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#c9c9c9',
        margin: 5
    },
})
export default ImageCarousel