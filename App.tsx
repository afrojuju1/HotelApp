import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
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

export default function App() {
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


      <HotelCard />
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
