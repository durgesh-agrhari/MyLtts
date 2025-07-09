import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.Image
        source={require('../../assets/logo1.png')}
        style={[
          styles.image,
          { opacity: fadeAnim },
        ]}
      />
      <Animated.Text style={[styles.text, { opacity: textAnim }]}>
        My Ltts
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF', // iOS blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125, // Circle
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Splash;


// import React, { useEffect } from 'react';
// import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Splash = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       navigation.navigate('BottomTab');
//     }, 3000);

//     return () => clearTimeout(timeout); // Cleanup on unmount
//   }, []);

//   return (
//     <View
//       style={[
//         styles.container,
//       ]}
//     >
//       <StatusBar hidden /> 
//       <Image
//         source={require('../../assets/logo1.png')}
//         style={{width:500, height:500}}
//       />
//       <Text>My Ltts</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default Splash;
