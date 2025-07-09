import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Bookingmenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Booking Menu"
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('BadmintonBooking')}
        >
          <Text style={styles.menuText}>🏸 Badminton Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('TableTennisBooking')}
        >
          <Text style={styles.menuText}>🏓 Table Tennis Booking</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={[styles.menuItem, {backgroundColor:'gray', marginTop:50}]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.menuText,{alignSelf:'center'}]}>goBack</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Bookingmenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  menuContainer: {
    padding: 20,
    marginTop: 30,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
