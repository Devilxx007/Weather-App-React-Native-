import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator,Text } from 'react-native';
import Current from './screens/Current';
import Update from './screens/Update';
import City from './screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location';
const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setlocation] = useState(null);
  const [err, setErr] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErr('Permission Denied');
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        setlocation(location);

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=a10ec18df7c7559b1200dbaa9cde34e4`
        );
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        setErr('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lat, lon]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator color={'black'} size={'large'} />
      </View>
    );
  }

  if (err) {
    return (
      <View>
        <Text>{err}</Text>
      </View>
    );
  }

  if (weather) {
    console.log(weather);
  }

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name={'Current'} component={Current} />
      <Tab.Screen name={'Upcoming'} component={Update} />
      <Tab.Screen name={'City'} component={City} />
    </Tab.Navigator>
  </NavigationContainer>
  );
};

export default App;
