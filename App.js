import { React } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useGetWeather } from './screens/hooks/useGetWeather'
import Tabs from './screens/components/Tabs'

const App = () => {
  const [loading, err, weather] = useGetWeather()

  if(weather && weather.list){
    return (
    <NavigationContainer>
      <Tabs weather = {weather} />
    </NavigationContainer>
  )
}
    return (
      <View>
        <ActivityIndicator color={'black'} size={'large'} />
      </View>
    )
    
}

export default App
