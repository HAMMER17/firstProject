import React, { useEffect, useState } from 'react';

import * as Location from 'expo-location';
import { Text, StyleSheet, Alert, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import Weather from './src/Weather';
import Loading from './src/Loading';

const API_KEY = 'a8a235869a69d9b215946bc2f20c0681';


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null)
  const [temp, setTemp] = useState(null)
  const [description, setDescription] = useState(null)
  const [weather, setWeather] = useState(null)


  const getWehter = async (latitude, longitude) => {
    try {
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&appid=${API_KEY}&units=metric`)
        .then(res => {
          setCity(res.data.name)
          setTemp(res.data.main.temp)
          setDescription(res.data.weather[0].description)
          setWeather(res.data.weather[0].main)
        })
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
      getWehter(latitude, longitude);

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.log(text)
  console.log(weather)
  return (
    <>
      <LinearGradient style={styles.container} colors={['blue', 'green', 'grey']}>
        <Text style={{ fontSize: 20, color: 'orange' }}>город</Text>
        <Text style={styles.text}>{city}</Text>
        <Text style={{ color: 'orange' }}>погода</Text>
        <Text style={styles.text}>{description}</Text>
        <Weather temp={temp} />
        <Loading data={weather} />

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
    fontSize: 30,
    margin: 20
  }
})