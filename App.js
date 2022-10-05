import React, { useEffect, useState } from 'react';

import * as Location from 'expo-location';
import { Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import Weather from './src/Weather';
import Loading from './src/Loading';

const API_KEY = 'a8a235869a69d9b215946bc2f20c0681';


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather1, setWeather1] = useState({})
  const [weather2, setWeather2] = useState('')
  const [weather3, setWeather3] = useState('')

  const getWehter = async (latitude, longitude) => {
    try {
      const { data: { main, weather, name } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      const temp = JSON.stringify(main.temp)
      const mains = JSON.stringify(weather[0].main)
      const city = JSON.stringify(name)

      setWeather1(temp)
      setWeather2(mains)
      setWeather3(city)
    } catch (errorMsg) {
      Alert.alert('что то пошло не так... , попробуй снова')
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      setLocation(location);
      getWehter(latitude, longitude)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      <LinearGradient style={styles.container} colors={['blue', 'green', 'grey']}>
        <Text style={{ fontSize: 20 }}>город</Text>
        <Text style={styles.text}>{weather3 ? JSON.parse(weather3) : text}</Text>
        <Weather temp={weather1} />
        <Loading data={weather2} />

      </LinearGradient>

    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
})