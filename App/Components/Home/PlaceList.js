import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'

export default function PlaceList({placeList}) {
  return (
    <View>
      <Text style={{ fontSize:20 ,marginTop:10}}>Found {placeList.length} Places</Text>

      <FlatList
      data={placeList}
      renderItem={({item,index})=>(
        index%4==0?
        <PlaceItem place={item}/>
        :<PlaceItem place={item}/>
      )}
      >

      </FlatList>
    </View>
  )
}