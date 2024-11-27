import { View, Text } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { StyleSheet } from 'react-native'
import Footer from '../components/Footer'

const AboutScreen = () => {
  const date = new Date();
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={{fontSize:22}}>Your To Do List App!</Text>
      </View>
      <Footer>
        <Text>Made by: Simon Luna</Text>
        <Text>{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</Text>
      </Footer>
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
    alignItems: 'center'
  },
});

export default AboutScreen