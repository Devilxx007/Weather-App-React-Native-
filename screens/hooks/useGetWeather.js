import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
export const useGetWeather = () =>{
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
              `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=a10ec18df7c7559b1200dbaa9cde34e4&units=metric`
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
      return[loading,err,weather]
}