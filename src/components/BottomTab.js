// BottomTab.js (or BottomTabNavigator.js)
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import BookingScreen from '../screens/bookingScreen/BookingScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import OfferScreen from '../screens/offerScreen/OfferScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeScreen') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'OfferScreen') iconName = focused ? 'car' : 'car-outline';
          else if (route.name === 'BookingScreen') iconName = focused ? 'calendar' : 'calendar-outline';
          else if (route.name === 'ProfileScreen') iconName = focused ? 'person-circle' : 'person-circle-outline' ;
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="OfferScreen" component={OfferScreen} options={{ title: 'Offers' }} />
      <Tab.Screen name="BookingScreen" component={BookingScreen} options={{ title: 'Booking' }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default BottomTab;
