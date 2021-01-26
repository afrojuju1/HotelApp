import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { P_COLOR } from './constants'
import HotelCard from './HotelCard'

const { width } = Dimensions.get('window')

const FirstRoute = () => {
  const nav = useNavigation()

  function renderCItem(item: any) {
    return <HotelCard key={item.index} onPress={() => nav.navigate('details')} />
  }

  return (
    <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
      <Carousel
        data={[{ index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }]}
        renderItem={renderCItem}
        itemWidth={width - 140}
        sliderWidth={width}
      />
    </View>
  )
}

const SecondRoute = () => (
  <View style={{ backgroundColor: '#673ab7', height: '100%' }} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function MainTabs() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'all', title: 'All' },
    { key: 'popular', title: 'Popular' },
    { key: 'top', title: 'Top Rated' },
  ])

  const renderScene = SceneMap({
    all: FirstRoute,
    popular: SecondRoute,
    top: SecondRoute,
  })

  const renderTabBar = (props: any) => {
    // console.log('*** props: ', props)
    return (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: P_COLOR,
          height: 4,
          borderRadius: 2,
          width: 40,
          marginLeft: 15,
        }}
        labelStyle={{
          color: P_COLOR,
          textTransform: 'capitalize'
        }}
        style={{
          backgroundColor: 'transparent',
          borderWidth: 0,
        }}
        tabStyle={{
          alignItems: 'flex-start',
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderStyle: undefined,
          borderLeftWidth: 0,
        }}
        inactiveColor={'#dedede'}
      />
    )
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      style={{
        shadowOffset: { height: 0, width: 0 },
      }}
    />
  )
}
