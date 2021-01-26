import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel'
import { SceneMap, TabView } from 'react-native-tab-view'
// @ts-ignore
import styled from 'styled-components/native'
import HotelCard from './HotelCard'
import MainTabs from './MainTabs'

const StyledView = styled.View`
  background-color: papayawhip;
`;

const Row = styled.View`
  flex-direction: row;
`;

const primaryColor = '#52C0B4'
const B_RADIUS = 20
const { width } = Dimensions.get('window')
const sWidth = width - (width * 0.20)

export default function App() {
  function renderCItem(item: any) {
    return <HotelCard key={item.index} />
  }

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        // justifyContent: 'space-between',
      }}>
        <View style={{
          flex: 0.7,
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 40,
          }}>Find your hotel in
            <Text style={{
              color: primaryColor,
              fontSize: 40,
              fontWeight: 'bold'
            }}> Paris</Text>
          </Text>
        </View>

        <View style={{
          flex: 0.3,
          justifyContent: 'flex-start',
          alignItems: 'flex-end'
        }}>
          <TouchableOpacity onPress={() => {}}>
            <View style={{ backgroundColor: 'blue', width: 30, height: 30 }} />
            {/*<Ionicons name="ios-checkbox" size={32} color="green" />*/}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        backgroundColor: '#dedede',
        width: '120%',
        alignItems: 'center',
        borderRadius: 30,
        height: 50,
        paddingLeft: 10,
        paddingRight: 15,
        marginTop: 25,
      }}>
        <View style={{ backgroundColor: 'red', width: 30, height: 30 }} />
        <TextInput
          style={{
            height: '100%',
            fontSize: 20,
            paddingLeft: 10,
            paddingRight: 10,
            width: '90%',
            fontWeight: '500',
          }}
          placeholder={'Search'}
          // value={'sample'}
        />
      </View>

      <MainTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 20,
  },
});
