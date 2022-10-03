import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Loading = ({ data }) => {
  const icons = {
    Clouds: {
      iconName: 'cloud',
      text: 'облачно'
    },
    Rain: {
      iconName: 'rainy',
      text: 'дождь',
    },
    Thunderstorm: {
      iconName: 'thunderstorm',
      text: 'гроза'
    },
    Clear: {
      iconName: 'sunny',
      text: 'солнечно'
    },
    Drizzle: {
      iconName: 'rainy',
      text: 'дождик'
    },
    Snow: {
      iconName: 'snow',
      text: 'снег'
    }
  }
  let item = JSON.parse(data)

  return (
    <View style={styles.container} colors={['yellow', 'green', 'grey']}>
      <Text style={styles.text}>
        <Ionicons name={icons[item].iconName} size={60} color="black" />
      </Text>
      <Text style={styles.text}>{icons[item].text}</Text>
    </View>
  )
}

export default Loading;
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontSize: 25,
    textAlign: 'center'
    // paddingHorizontal: 30,
    // paddingVertical: 600,
  }
})