import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'


//API=  AIzaSyDALHJ2wczms-qP7NbN6RrDtoN6g9XHo58
export default function Home() {
  return (
    <View style={{ padding:20 }}>
      <Header/>
      <GoogleMapView/>
    </View>
  )
}