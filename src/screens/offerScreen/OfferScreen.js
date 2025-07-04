import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  Alert,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../components/Header';

const CreateRideOffer = () => {
  const [origin, setOrigin] = useState('');
  const [destination1, setDestination1] = useState('');
  const [destination2, setDestination2] = useState('');
  const [destination3, setDestination3] = useState('');

  const [dateTimeState, setDateTimeState] = useState({
    selectedDate: '',
    selectedTime: '',
    showDatePicker: false,
    showTimePicker: false,
  });

  const [myOffers, setMyOffers] = useState([]);

  const otherOffers = [
    {
      id: '1',
      origin: 'Delhi',
      destinations: ['Noida'],
      date: '2025-07-05',
      time: '09:00 AM',
    },
    {
      id: '2',
      origin: 'Bangalore',
      destinations: ['Mysore', 'Hassan'],
      date: '2025-07-06',
      time: '06:30 PM',
    },
    {
      id: '3',
      origin: 'Chennai',
      destinations: ['Pondicherry'],
      date: '2025-07-07',
      time: '08:00 AM',
    },
  ];

  const showDatePicker = () => {
    setDateTimeState(prev => ({
      ...prev,
      showDatePicker: true,
    }));
  };

  const hideDatePicker = () => {
    setDateTimeState(prev => ({
      ...prev,
      showDatePicker: false,
    }));
  };

  const handleDateConfirm = (event, date) => {
    hideDatePicker();
    if (!date) return;
    const formattedDate = new Date(date).toISOString().split('T')[0];
    setDateTimeState(prev => ({
      ...prev,
      selectedDate: formattedDate,
    }));
  };

  const showTimePicker = () => {
    setDateTimeState(prev => ({
      ...prev,
      showTimePicker: true,
    }));
  };

  const hideTimePicker = () => {
    setDateTimeState(prev => ({
      ...prev,
      showTimePicker: false,
    }));
  };

  const handleTimeConfirm = (event, date) => {
    hideTimePicker();
    if (!date) return;
    const formattedTime = new Date(date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setDateTimeState(prev => ({
      ...prev,
      selectedTime: formattedTime,
    }));
  };

  const handleSubmit = () => {
    const { selectedDate, selectedTime } = dateTimeState;

    if (!origin || !destination1 || !selectedDate || !selectedTime) {
      Alert.alert('Missing Fields', 'Please fill all required fields');
      return;
    }

    const newOffer = {
      id: Date.now().toString(),
      origin,
      destinations: [destination1, destination2, destination3].filter(Boolean),
      date: selectedDate,
      time: selectedTime,
    };

    setMyOffers(prev => [newOffer, ...prev]);

    // Reset form
    setOrigin('');
    setDestination1('');
    setDestination2('');
    setDestination3('');
    setDateTimeState({
      selectedDate: '',
      selectedTime: '',
      showDatePicker: false,
      showTimePicker: false,
    });

    Alert.alert('Ride Offer Created', 'Your ride offer has been added!');
  };

  const renderOffer = ({ item }) => (
    <View key={item.id} style={styles.offerItem}>
      <Text style={styles.offerText}>
        🚗 {item.origin} → {item.destinations.join(' → ')}
      </Text>
      <Text style={styles.offerSubText}>
        📅 {item.date} ⏰ {item.time}
      </Text>
    </View>
  );

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.heading}>Create Ride Offer</Text>

          <TextInput
            style={styles.input}
            placeholder="Origin"
            value={origin}
            onChangeText={setOrigin}
          />

          <TextInput
            style={styles.input}
            placeholder="Destination 1 (Required)"
            value={destination1}
            onChangeText={setDestination1}
          />

          <TextInput
            style={styles.input}
            placeholder="Destination 2 (Optional)"
            value={destination2}
            onChangeText={setDestination2}
          />

          <TextInput
            style={styles.input}
            placeholder="Destination 3 (Optional)"
            value={destination3}
            onChangeText={setDestination3}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{width:'48%'}}>
              <Text style={styles.label}>Select Date:</Text>
              <Button
                title={dateTimeState.selectedDate || 'Pick a date'}
                onPress={showDatePicker}
              />
            </View>
            <View style={{width:'48%'}}>
              <Text style={styles.label}>Select Time:</Text>
              <Button
                title={dateTimeState.selectedTime || 'Pick a time'}
                onPress={showTimePicker}
              />

            </View>
          </View>



          {dateTimeState.showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateConfirm}
            />
          )}

          {dateTimeState.showTimePicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour={true}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleTimeConfirm}
            />
          )}

          <View style={{ marginTop: 30 }}>
            <Button title="Create Ride Offer" onPress={handleSubmit} />
          </View>

          {/* Your Ride Offers */}
          {myOffers.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Your Ride Offers</Text>
              {myOffers.map(item => renderOffer({ item }))}
            </>
          )}

          {/* Other Ride Offers */}
          <Text style={styles.sectionTitle}>Other Ride Offers</Text>
          {otherOffers.map(item => renderOffer({ item }))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 80,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 50,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerItem: {
    padding: 12,
    backgroundColor: '#d5d8de',
    borderRadius: 8,
    marginBottom: 10,
  },
  offerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  offerSubText: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default CreateRideOffer;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Platform,
//   Alert,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const CreateRideOffer = () => {
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const [dateTimeState, setDateTimeState] = useState({
//     selectedDate: '',
//     selectedTime: '',
//     showDatePicker: false,
//     showTimePicker: false,
//   });

//   const [myOffers, setMyOffers] = useState([]);

//   const otherOffers = [
//     {
//       id: '1',
//       origin: 'Delhi',
//       destination: 'Noida',
//       date: '2025-07-05',
//       time: '09:00 AM',
//     },
//     {
//       id: '2',
//       origin: 'Bangalore',
//       destination: 'Mysore',
//       date: '2025-07-06',
//       time: '06:30 PM',
//     },
//     {
//       id: '3',
//       origin: 'Chennai',
//       destination: 'Pondicherry',
//       date: '2025-07-07',
//       time: '08:00 AM',
//     },
//   ];

//   const showDatePicker = () => {
//     setDateTimeState(prev => ({
//       ...prev,
//       showDatePicker: true,
//     }));
//   };

//   const hideDatePicker = () => {
//     setDateTimeState(prev => ({
//       ...prev,
//       showDatePicker: false,
//     }));
//   };

//   const handleDateConfirm = (event, date) => {
//     hideDatePicker();
//     if (!date) return;
//     const formattedDate = new Date(date).toISOString().split('T')[0];
//     setDateTimeState(prev => ({
//       ...prev,
//       selectedDate: formattedDate,
//     }));
//   };

//   const showTimePicker = () => {
//     setDateTimeState(prev => ({
//       ...prev,
//       showTimePicker: true,
//     }));
//   };

//   const hideTimePicker = () => {
//     setDateTimeState(prev => ({
//       ...prev,
//       showTimePicker: false,
//     }));
//   };

//   const handleTimeConfirm = (event, date) => {
//     hideTimePicker();
//     if (!date) return;
//     const formattedTime = new Date(date).toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//     setDateTimeState(prev => ({
//       ...prev,
//       selectedTime: formattedTime,
//     }));
//   };

//   const handleSubmit = () => {
//     const { selectedDate, selectedTime } = dateTimeState;

//     if (!origin || !destination || !selectedDate || !selectedTime) {
//       Alert.alert('Missing Fields', 'Please fill all fields');
//       return;
//     }

//     const newOffer = {
//       id: Date.now().toString(),
//       origin,
//       destination,
//       date: selectedDate,
//       time: selectedTime,
//     };

//     setMyOffers(prev => [newOffer, ...prev]);
//     setOrigin('');
//     setDestination('');
//     setDateTimeState({
//       selectedDate: '',
//       selectedTime: '',
//       showDatePicker: false,
//       showTimePicker: false,
//     });

//     Alert.alert('Ride Offer Created', 'Your ride offer has been added!');
//   };

//   const renderOffer = ({ item }) => (
//     <View style={styles.offerItem}>
//       <Text style={styles.offerText}>
//         🚗 {item.origin} → {item.destination}
//       </Text>
//       <Text style={styles.offerSubText}>
//         📅 {item.date} ⏰ {item.time}
//       </Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Ride Offer</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Origin"
//         value={origin}
//         onChangeText={setOrigin}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Destination"
//         value={destination}
//         onChangeText={setDestination}
//       />

//       <Text style={styles.label}>Select Date:</Text>
//       <Button
//         title={dateTimeState.selectedDate || 'Pick a date'}
//         onPress={showDatePicker}
//       />

//       <Text style={styles.label}>Select Time:</Text>
//       <Button
//         title={dateTimeState.selectedTime || 'Pick a time'}
//         onPress={showTimePicker}
//       />

//       {dateTimeState.showDatePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//           onChange={handleDateConfirm}
//         />
//       )}

//       {dateTimeState.showTimePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="time"
//           is24Hour={true}
//           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//           onChange={handleTimeConfirm}
//         />
//       )}

//       <View style={{ marginTop: 30 }}>
//         <Button title="Create Ride Offer" onPress={handleSubmit} />
//       </View>

//       {/* Your Created Offers */}
//       {myOffers.length > 0 && (
//         <>
//           <Text style={styles.sectionTitle}>Your Ride Offers</Text>
//           <FlatList
//             data={myOffers}
//             keyExtractor={item => item.id}
//             renderItem={renderOffer}
//           />
//         </>
//       )}

//       {/* Others' Offers */}
//       <Text style={styles.sectionTitle}>Other Ride Offers</Text>
//       <FlatList
//         data={otherOffers}
//         keyExtractor={item => item.id}
//         renderItem={renderOffer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingBottom: 50,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#aaa',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//   },
//   label: {
//     marginTop: 20,
//     marginBottom: 8,
//     fontSize: 16,
//   },
//   sectionTitle: {
//     marginTop: 30,
//     marginBottom: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   offerItem: {
//     padding: 12,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   offerText: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   offerSubText: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 4,
//   },
// });

// export default CreateRideOffer;





// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Header from '../../components/Header'

// const OfferScreen = () => {
//   return (
//     <View>
//         <Header/>
//       <Text>OfferScreen</Text>
//     </View>
//   )
// }

// export default OfferScreen

// const styles = StyleSheet.create({})