import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import icedCoffeeImg  from '@/assets/iced-il_570xN.6015593925_kuxb.avif'
import React from 'react'


const app = () => {
  return (
    <View style={styles.container}>
    
    <ImageBackground
    source={icedCoffeeImg}
    resizeMode="cover"
    style={styles.image}
    > 
  
      <Text style={styles.text}> Coffee shopp</Text>
      </ImageBackground>

    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100∞',
    flex: '1',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
})