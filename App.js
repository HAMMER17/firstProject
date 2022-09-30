import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Weather from './src/Weather';
import Loading from './src/Loading';

const API_KEY = 'a8a235869a69d9b215946bc2f20c0681';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather1, setWeather1] = useState({})
  // const [weather2, setWeather2] = useState('')
  const [weather3, setWeather3] = useState('')
  // const [weather4, setWeather4] = useState('')

  const getWehter = async (latitude, longitude) => {
    const { data: { main, weather, name } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    const temp = JSON.stringify(main.temp)
    // const temp_min = JSON.stringify(main.temp_min)
    // const temp_max = JSON.stringify(main.temp_max)
    // const mains = JSON.stringify(weather[0].main)
    const city = JSON.stringify(name)
    setWeather1(temp)
    // setWeather2(mains)
    setWeather3(city)
    // setWeather4(temp_max)
  }

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      setLocation(`${latitude} ${longitude}`);

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
      <View style={styles.container}>
        <Text>город</Text>
        <Text style={styles.text}>{weather3}</Text>
        {/* <Text>{weather3}</Text> */}
      </View>
      <Weather temp={Math.round(weather1)}
        main={<Ionicons name="cloud" size={60} color="black" />} />
      <Loading />
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