import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Loading = ({ data }) => {
  const [elem, setElem] = React.useState(null)
  React.useEffect(() => {
    if ('Clouds' === data) {
      setElem("cloud")
    } else if ('Rain' === data) {
      setElem("rainy-sharp")
    } else if ('Thunderstorm' === data) {
      setElem("thunderstorm")
    } else if ('Clear' === data) {
      setElem("sunny")
    } else if ('Drizzle' === data) {
      setElem("rainy")
    } else if ('Snow' === data) {
      setElem("snow")
    }
  }, [])
  console.log(elem)
  return (
    <View style={styles.container} colors={['yellow', 'green', 'grey']}>
      <Text style={styles.text}>
        <Ionicons name={elem} size={80} color="black" />
      </Text>

    </View>
  )
}

export default Loading;
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  }
})