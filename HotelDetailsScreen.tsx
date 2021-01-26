import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { B_RADIUS, P_COLOR } from './constants'

const uri = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'

interface Hotel {
  name: string
  subName: string
  reviewsTotal: number
  description: string
  price: number
}

const hotel: Hotel = {
  name: 'Silver Hotel & SPA',
  subName: 'Green street, Central district',
  reviewsTotal: 326,
  description: 'Short description about the hotel.',
  price: 120,
}

export default function () {
  const nav = useNavigation()

  return (
    <View style={{
      flex: 1,
      height: '100%',
    }}>
      <ImageBackground
        source={{ uri }}
        style={styles.imgWrapper}
        imageStyle={{
          borderBottomLeftRadius: 45,
          borderBottomRightRadius: 45,
          height: '100%',
        }}
      >
        <View style={{
          paddingTop: 50,
          paddingLeft: 20,
          paddingRight: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity onPress={() => nav.goBack()}>
            <View style={{ backgroundColor: 'blue', width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('todo: bootmark button')}>
            <View style={{ backgroundColor: 'red', width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{
        padding: 20,
      }}>
        <View>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 32,
          }}>{hotel.name}</Text>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 10,
          }}>{hotel.subName}</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 16,
            alignSelf: 'flex-end',
          }}>4.0</Text>
          <Text style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 10,
          }}>{hotel.reviewsTotal} reviews</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}>{hotel.description}</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 25,
          }}>Price per night</Text>

          <View style={{
            backgroundColor: '#9aecdd',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 40,
            borderRadius: 40,
            width: '100%',
            marginLeft: 20,
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 25,
            }}>$ {hotel.price}</Text>
          </View>
        </View>
      </View>

      <View style={{
        position: 'absolute',
        bottom: 70,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
        <View style={{
          backgroundColor: P_COLOR,
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 20,
        }}>
          <Text style={{
            alignSelf: 'center',
            color: '#fff',
            fontSize: 25,
            fontWeight: 'bold',
          }}>Book now</Text>
        </View>
      </View>
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
    height: '45%',
  },
})
