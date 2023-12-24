import React from 'react'
import {View,Text, SafeAreaView} from "react-native"
import {Feather} from "@expo/vector-icons"
const Current = () => {
  return (
    <SafeAreaView className= ' bg-slate-900 flex-1' >
    <View className = ' text-white flex-1 items-center justify-center bg-slate-900 ' >
      <Feather name="sun" size={100} color={"white"}></Feather>
      <Text className=' text-white text-lg items-center text-center'>Current Weather</Text>
      <Text className='text-white text-lg text-center'>Feels Like : </Text>
      <View className=' flex flex-row justify-center'>
        <Text className=' text-white text-sm text-center mr-2'>High</Text>
        <Text className=' text-white text-sm text-center'>Low</Text>
      </View>
      </View>
      <View className=' justify-end items-start ml-3 p-2'>
      <Text className=' text-white text-3xl align-bottom'>Its Sunny</Text>
      <Text className=' text-white text-2xl'> Perfect T-Shirt Wetaher </Text>
      </View>
    </SafeAreaView>
  )
}

export default Current
