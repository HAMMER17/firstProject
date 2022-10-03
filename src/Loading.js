import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Loading = ({ data }) => {
  const icons = {
    Clouds: {
      iconName: 'cloud',
    },
    Rain: {
      iconName: 'rainy',
    },
    Thunderstorm: {
      iconName: 'thunderstorm',
    },
    Clear: {
      iconName: 'sunny',
    },
    Drizzle: {
      iconName: 'rainy',
    },
    Snow: {
      iconName: 'snow',
    }
  }
  let item = JSON.parse(data)
  console.log(icons[item].iconName)
  return (
    <View style={styles.container} colors={['yellow', 'green', 'grey']}>
      <Text style={styles.text}>
        <Ionicons name={icons[item].iconName} size={60} color="black" />
      </Text>
      <Text style={styles.text}>{data}</Text>
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