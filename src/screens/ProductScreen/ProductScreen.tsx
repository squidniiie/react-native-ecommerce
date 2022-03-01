import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import styles from './styles'
import product from '../../data/product'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector'
import Buttons from '../../components/Buttons/Buttons'
import ImageCarousel from '../../components/Carousel/ImageCarousel'

const ProductScreen = () => {
  const [option, setOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  console.log(route.params)


  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={option}
        onValueChange={(itemValue) =>
          setOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      <Text style={styles.price}>from ${product.price}
        {product.oldPrice && (<Text style={styles.oldPrice}>
          ${product.oldPrice}</Text>)}
      </Text>
      <Text style={styles.description}>
        {product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Buttons text={'Add to cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
        containerStyles={{
          backgroundColor: 'gold'
        }} />
      <Buttons text={'Buy Now'} onPress={() => { console.warn('Buy Now') }} />

    </ScrollView>
  )
}

export default ProductScreen