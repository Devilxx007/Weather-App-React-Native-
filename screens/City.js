import React from 'react'
import {View , SafeAreaView ,ImageBackground , Text} from 'react-native'
import { Feather } from "@expo/vector-icons"
const City = () => {
  return (
    <SafeAreaView className = ' flex-1'>
        <ImageBackground className = ' flex flex-col flex-1' source={require("../assets/kuala-lumpur-1820944_1920.jpg")}>
        <Text className=' text-white text-center text-4xl'  >
            London
        </Text>
        <Text className=' text-white text-4xl text-center'>
            United Kingdom
        </Text>
        <View className=' flex flex-row items-center justify-center mt-4'>
        <Feather name={'user'} size={50} color={'red'}/>
        <Text className=' text-white text-4xl text-center'>
            Population
        </Text  >
        </View>
        <View className=' mt-7 flex flex-row items-center justify-between ml-2 mr-2' >
            <Feather name={'sunrise'} size={50} color={'white'}/>
            <Text className=' text-white text-4xl'>Sunrise</Text>
            <Feather name={'sunset'} size={50} color={'white'}/>
            <Text className=' text-white text-4xl'>Sunset</Text>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default City
