import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext'

export default function GoogleMapView() {

    const [mapRegion, setMapRegion] = useState([]);
    const { location, setLocation } = useContext(UserLocationContext);
    console.log("location",location)

    useEffect(() => {
         if (location) {
            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.022,
                longitudeDelta: 0.0421,
            })
          
         }
    }, [location])

    return (
        <View style={{ marginTop: 20}}>
            <Text style={{
                fontSize: 20,
                marginBottom: 10, fontWeight: "600",
                
            }}>
                Top Near By Places
            </Text>
            <MapView
                style={{
                    width: Dimensions.get('screen').width * 0.89,
                    height: Dimensions.get('screen').height * 0.23
                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={mapRegion}>
                    
                    {location &&<Marker title='You'
                    coordinate={{
                        latitude: location.coords.latitude, 
                        longitude: location.coords.longitude,
                    }} />}

            </MapView>
        </View >
    )
}