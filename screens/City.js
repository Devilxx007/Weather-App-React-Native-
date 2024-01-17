import React from 'react'
import {View , SafeAreaView ,ImageBackground , Text} from 'react-native'
import { Feather } from "@expo/vector-icons"
import moment from 'moment'
const City = ({weatherData}) => {
    const{name,country,population,sunrise,sunset} = weatherData
  return (
    <SafeAreaView className = ' flex-1'>
        <ImageBackground className = ' flex flex-col flex-1' source={require("../assets/kuala-lumpur-1820944_1920.jpg")}>
        <Text className=' text-white text-center text-4xl'  >
            {name}
        </Text>
        <Text className=' text-white text-4xl text-center'>
        {country}
        </Text>
        <View className=' flex flex-row items-center justify-center mt-4'>
        <Feather name={'user'} size={50} color={'red'}/>
        <Text className=' text-white text-4xl text-center'>
            {`Population : ${population}`}
        </Text  >
        </View>
        <View className=' mt-7 flex flex-row items-center justify-between ml-2 mr-2' >
            <Feather name={'sunrise'} size={50} color={'white'}/>
            <Text className=' text-4xl text-white'>{moment(sunrise).format('h:mm:ss a')}</Text>
            <Feather name={'sunset'} size={50} color={'white'}/>
            <Text className=' text-white text-4xl'>{moment(sunset).format('h:mm:ss a')}</Text>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default City
