import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';

export default function GoogleMapView() {

    const[mapRegion,setMapRegion] = useState({
        latitude:37.78825,
        longitude:-122.4324,
        latitudeDelta:0.0522,
        longitudeDelta:0.0421,
    });

  return (
    <View style={{ marginTop: 20}}>
      <Text>
        <MapView
        style={{ width:Dimensions.get('screen').width*0.89,
        height:Dimensions.get('screen').height*0.23 
    }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}>

        </MapView>
      </Text>
    </View>
  )
}