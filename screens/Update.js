/* eslint-disable no-unused-vars */
import React from 'react'
import { View, SafeAreaView, Text, FlatList, ImageBackground } from 'react-native'
import { Feather } from "@expo/vector-icons"
import { weatherType } from './components/weatherType'
import moment from 'moment'
const Update = ({weatherData}) => {


  const Item = (weatherData) => {
    const { dt_text, min, max, condition } = weatherData
    return (
      <View className = ' border-4 border-black shadow-white shadow-md mt-2 rounded-md flex flex-row justify-around p-2 '>

        <Feather name={weatherType[condition].icon} size={50} color={'white'} />
        <View className=' flex flex-col'>
        <Text className=' text-white text-xl '>{moment(dt_text).format('dddd')}</Text>
        <Text className=' text-white text-xl '>{moment(dt_text).format('h:mm:ss a')}</Text>
        </View>
        
        <Text className=' text-white text-xl '>{`${Math.round(min)}`}</Text>
        <Text className=' text-white text-xl '>{`${Math.round(max)}`}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <Item dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main}  ></Item>
  )
  return (
    <SafeAreaView className = ' bg-slate-900 flex-1'>
      <ImageBackground source={require('../assets/clouds.jpg')} className = ' flex-1'>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item)=>{item.dt}}
      ></FlatList>

      </ImageBackground>
      
    </SafeAreaView>
  )
}

export default Update


