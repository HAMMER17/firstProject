import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Загрузка погоды...</Text>
    </View>
  )
}

export default Loading
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 25,
    textAlign: 'center'
    // paddingHorizontal: 30,
    // paddingVertical: 600,
  }
})