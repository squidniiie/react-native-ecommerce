import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector/QuantitySelector'

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    }
  };
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
  const { quantity: quantityProp, item } = cartItem;
  const [quantity, setQuantity] = useState(quantityProp)
  return (
    <ScrollView style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image}
          source={{ uri: item.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) =>
              <FontAwesome
                key={`${item.id}-${i}`}
                name={i < Math.floor(item.avgRating)
                  ? 'star' : 'star-o'} size={18}
                color={'#e47911'}
              />)
            }
            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>from ${item.price}
            {item.oldPrice && (<Text style={styles.oldPrice}>  ${item.oldPrice}</Text>)}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  root: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 7,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
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
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityContainer: {
    marginLeft: 20,
    marginVertical: 5
  }
});
export default CartProductItem