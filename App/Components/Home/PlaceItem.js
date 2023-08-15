import { View, Text, Image } from "react-native";
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";


export default function PlaceItem({place}) {
  return (
    <View>
        <Image source={require('./../../../assets/placeholder.jpg')}
        style={{width:120,height:120}}/>

        <View>
            <Text> {place.name}</Text>
            <Text>{place.vicinity}</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
    </View>
  )
}
