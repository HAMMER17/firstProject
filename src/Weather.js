import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import propTypes from 'prop-types'

const Weather = ({ temp, main, temp1, temp2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{main}</Text>
      {/* <Text style={styles.text}>min {temp1}°</Text> */}
      <Text style={styles.text}>Сегодня {temp}°</Text>
      {/* <Text style={styles.text}>max {temp2}°</Text> */}
    </View>
  )
}
// Weather.propTypes = {
//   temp: propTypes.number.isRequired
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  }
})
export default Weather
