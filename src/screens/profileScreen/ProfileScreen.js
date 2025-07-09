import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
   const navigation = useNavigation();
  // Dummy user data (replace with real data later)
  const user = {
    name: 'Durgesh Agrhari',
    psNumber: 'PS123456',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', // placeholder image
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.profileImage }} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.psNumber}>PS No: {user.psNumber}</Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🚗 Ride History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🍽 Food Ticket History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🏏 Sports Ticket History</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ddd',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  psNumber: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  buttonGroup: {
    marginTop: 40,
    width: '100%',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Header from '../../components/Header'

// const ProfileScreen = () => {
//   return (
//     <View>
//         <Header/>
//       <Text>ProfileScreen</Text>
//     </View>
//   )
// }

// export default ProfileScreen

// const styles = StyleSheet.create({})