/* eslint-disable no-unused-vars */
import React from 'react'
import { View, SafeAreaView, Text, FlatList, ImageBackground } from 'react-native'
import { Feather } from "@expo/vector-icons"
const Update = (props) => {



  const Data = [
    {
      "dt": 1701464400,
      "main": {
        "temp_min": 274.05,
        "temp_max": 274.34,
      },
      "weather": [{
        "main": "Clouds"
      }]
    },
    {
      "dt": 1701475200,
      "main": {
        "temp_min": 273.76,
        "temp_max": 273.81,
      },
      "weather": [{
        "main": "Clouds",
      }]
    },
    {
      "dt": 1701486000,
      "main": {
        "temp_min": 273.41,
        "temp_max": 273.41,
      },
      "weather": [{
        "main": "Clouds",
      }]
    }
  ]

  const Item = (props) => {
    const { dt, min, max, condition } = props
    return (
      <View className = ' border-4 border-black shadow-white shadow-md mt-2 rounded-md flex flex-row justify-around p-2 '>
        <Feather name='sun' size={50} color={'white'} />
        <Text className=' text-white text-xl '>{dt}</Text>
        <Text className=' text-white text-xl '>{min}</Text>
        <Text className=' text-white text-xl '>{max}</Text>
        <Text className=' text-white text-xl '>{condition}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <Item dt={item.dt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main}  ></Item>
  )
  return (
    <SafeAreaView className = ' bg-slate-900 flex-1'>
      <ImageBackground source={require('../assets/clouds.jpg')} className = ' flex-1'>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item)=>{item.dt}}
      ></FlatList>

      </ImageBackground>
      
    </SafeAreaView>
  )
}

export default Update


