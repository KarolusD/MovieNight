import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BottomMenu = () => {
  return (
    <View style={styles.menu}>
      <Text>Bottom Menu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'black',
    height: 80,
    width: 600,
  },
})
export default BottomMenu
