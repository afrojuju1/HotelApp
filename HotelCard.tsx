import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { B_RADIUS, P_COLOR } from './constants'

const uri = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'

export default function HotelCard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri }}
        style={styles.imgWrapper}
        imageStyle={{
          borderRadius: B_RADIUS,
        }}
      >
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>$ 150</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <View>
              <Text style={{
                fontWeight: 'bold',
                marginBottom: 5,
              }}>Silver Hotel & SPA</Text>
              <Text>Green street, Central district</Text>
            </View>
            {/*todo: replace with bookmark icon*/}
            <View style={{ backgroundColor: 'red', width: 30, height: 30 }} />
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
            <Text>4.0 star ratings!</Text>
            <Text>300 reviews</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    alignSelf: 'center',
  },
  imgWrapper: {
    width: 260,
    height: 300,
    justifyContent: 'flex-end',
  },
  priceWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 15,
    backgroundColor: P_COLOR,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  detailsWrapper: {
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 15,
  },
})
