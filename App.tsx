import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel'
// @ts-ignore
import styled from 'styled-components/native'
import HotelCard from './HotelCard'

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
        justifyContent: 'space-between',
      }}>
        <Row>
          <Text style={{
            fontSize: 30,
          }}>Find your hotel in
          </Text>
          <Text style={{
            color: primaryColor,
            fontSize: 30,
            marginLeft: 6,
            fontWeight: 'bold'
          }}>Paris</Text>
        </Row>
        <TouchableOpacity onPress={() => {}}>
          <View style={{ backgroundColor: 'blue', width: 30, height: 30 }} />
          {/*<Ionicons name="ios-checkbox" size={32} color="green" />*/}
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        backgroundColor: '#999999',
        width: '100%',
        alignItems: 'center',
        borderRadius: 30,
        height: 50,
        paddingLeft: 10,
        paddingRight: 15,
      }}>
        <View style={{ backgroundColor: 'red', width: 30, height: 30 }} />
        <TextInput
          style={{
            height: '100%',
            fontSize: 20,
            paddingLeft: 10,
            paddingRight: 10,
            width: '90%',
          }}
          placeholder={'Search'}
          // value={'sample'}
        />
      </View>

      <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
        <Carousel
          data={[{ index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }]}
          renderItem={renderCItem}
          itemWidth={width - 140}
          sliderWidth={width}
        />
      </View>
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
