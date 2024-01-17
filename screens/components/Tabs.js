import  { React } from 'react';
import Current from '../Current';
import Update from '../Update';
import City from '../City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { useGetWeather } from './screens/hooks/useGetWeather';

const Tab = createBottomTabNavigator()
const Tabs = ({weather}) => {
    return(
    <Tab.Navigator>
      <Tab.Screen name={'Current'} >{()=><Current weatherData = {weather.list[0]}/>}</Tab.Screen>
      <Tab.Screen name={'Upcoming'} >{()=><Update weatherData = {weather.list}/>}</Tab.Screen>
      <Tab.Screen name={'City'} >{()=><City weatherData = {weather.city}/>}</Tab.Screen>
    </Tab.Navigator>
    )
}

export default Tabs