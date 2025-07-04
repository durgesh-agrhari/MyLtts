import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

const BookingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <View
        style={{
          padding: 10,
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#d5d8de',
          borderRadius: 20,
          margin:10
        }}>
        <Image
          source={{
            uri: 'https://www.yummytoddlerfood.com/wp-content/uploads/2022/04/Homemade-Lunch-1-horiz.jpg',
          }}
          style={{
            width: 350,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 20,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          Book Lunch Ticket
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Let's upload sort video and start sharing your creativity withe
          community   ``
        </Text>

        <TouchableOpacity
          onPress={() => navigation.push('FoodMenuScreen')}
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 25,
            padding: 10,
            borderRadius: 30,
            marginTop: 20,
          }}>
          <Text style={{ color: 'white' }}>Book now</Text>
        </TouchableOpacity>
      </View>

        <View
        style={{
          padding: 10,
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#d5d8de',
          borderRadius: 20,
          margin:10
        }}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-132612.jpg?semt=ais_hybrid&w=740',
          }}
          style={{
            width: 350,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 20,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          Book Sport Slots
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Let's upload sort video and start sharing your creativity withe
          community   ``
        </Text>

        <TouchableOpacity
          // onPress={() => navigation.push('CameraRool')}
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 25,
            padding: 10,
            borderRadius: 30,
            marginTop: 20,
          }}>
          <Text style={{ color: 'white' }}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})