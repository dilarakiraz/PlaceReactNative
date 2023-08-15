import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Components/Home/PlaceList'


//API=  AIzaSyDALHJ2wczms-qP7NbN6RrDtoN6g9XHo58

//apı_keyyou= "AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0"
export default function Home() {

  const [placeList, setPlaceList] = useState([]);
  useEffect(() => {
    GetNearBySearch();

  }, [])

  const GetNearBySearch = () => {
    GlobalApi.nearByPlace().then(resp => {
      //console.log(resp)
      setPlaceList(resp.data.results)
    })
  }
  return (
    <View style={{ padding: 20 }}>
      <Header />
      <GoogleMapView />
      <CategoryList />
      {placeList ? <PlaceList placeList={placeList} /> : null}

    </View>
  )
}