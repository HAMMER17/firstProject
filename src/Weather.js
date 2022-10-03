import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Weather = ({ temp }) => {

  return (
    <>
      <View style={styles.container} colors={['grey', 'blue', 'yellow']}>

        <Text style={styles.text}>Сегодня {Math.round(temp)}°</Text>

      </View>
    </>
  )
}

// Weather.propTapes = {
//   data: propTapes.oneOf(['Rain', 'Clouds'])
// }
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white'
  }
})
export default Weather
