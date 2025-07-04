import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={{marginTop:25}}>
      <Image source={require('../assets/logo.png')} style={{width:'100%', height:70}} />
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})