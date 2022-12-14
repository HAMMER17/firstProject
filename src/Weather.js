import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Weather = ({ temp }) => {

  return (
    <>
      <View style={styles.container} colors={['grey', 'blue', 'yellow']}>
        <Text style={styles.text}>сегодня {Math.round(temp)}°c</Text>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
    margin: 20
  }
})
export default Weather
