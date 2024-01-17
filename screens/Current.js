import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from './components/weatherType'
const Current = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main
  return (
    <SafeAreaView
      style={[
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
      className=" bg-slate-900 flex-1"
    >
      <View className=" text-white flex-1 items-center justify-center bg-slate-900 ">
        <Feather name={weatherType[weatherCondition].icon} size={100} color={'white'}></Feather>
        <Text className=" text-white text-lg items-center text-center">
          {temp}
        </Text>
        <Text className="text-white text-lg text-center">{`Feels like :${feels_like}`}</Text>
        <View className=" flex flex-row justify-center">
          <Text className=" text-white text-sm text-center mr-2">{`High : ${temp_max}`}</Text>
          <Text className=" text-white text-sm text-center">{`Low:${temp_min}`}</Text>
        </View>
      </View>
      <View className=" justify-end items-start ml-3 p-2">
        <Text className=" text-white text-3xl align-bottom">{weather[0].description}</Text>
        <Text className=" text-white text-2xl">
          {' '}
          {weatherType[weatherCondition].message}{' '}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Current
