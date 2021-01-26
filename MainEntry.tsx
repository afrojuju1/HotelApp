import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import App from './App'
import HotelDetailsScreen from './HotelDetailsScreen'

const Stack = createStackNavigator()

export default function MainEntry() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'main_page'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'main_page'} component={App} />
        <Stack.Screen name={'details'} component={HotelDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
