import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Loading = ({ data }) => {
  if ('Clouds' == data) {
    return <Ionicons name="cloud" size={80} color="black" />
  } else if ('Rain' == data) {
    return <Ionicons name="rainy-sharp" size={80} color="black" />
  } else if ('Thunderstorm' == data) {
    return <Ionicons name="thunderstorm" size={80} color="black" />
  } else if ('Clear' == data) {
    return <Ionicons name="sunny" size={80} color="black" />;
  } else if ('Drizzle' == data) {
    return <Ionicons name="rainy" size={80} color="black" />
  } else if ('Snow' == data) {
    return <Ionicons name="snow" size={80} color="black" />
  }
  return (
    <View style={styles.container} colors={['yellow', 'green', 'grey']}>
      <Text style={styles.text}>{
        <Ionicons name={data} size={60} color="black" />}
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