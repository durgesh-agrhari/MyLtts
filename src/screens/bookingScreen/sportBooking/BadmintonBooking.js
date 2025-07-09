import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

const courts = ['Court 1', 'Court 2', 'Court 3'];
const slots = [
  '5:00 PM - 6:00 PM',
  '6:00 PM - 7:00 PM',
  '7:00 PM - 8:00 PM',
  '8:00 PM - 9:00 PM',
];

const BadmintonBooking = () => {
  const [bookedSlots, setBookedSlots] = useState({});

  const handleBooking = (court, slot) => {
    const slotId = `${court}_${slot}`;

    if (bookedSlots[slotId]) {
      Alert.alert('Slot already booked!');
      return;
    }

    setBookedSlots((prev) => ({
      ...prev,
      [slotId]: true,
    }));

    Alert.alert('Booking Confirmed', `You booked ${court} for ${slot}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Badminton Court Booking</Text>

      {courts.map((court) => (
        <View key={court} style={styles.courtContainer}>
          <Text style={styles.courtTitle}>{court}</Text>
          {slots.map((slot) => {
            const slotId = `${court}_${slot}`;
            const isBooked = bookedSlots[slotId];

            return (
              <TouchableOpacity
                key={slot}
                style={[styles.slotButton, isBooked && styles.bookedSlot]}
                onPress={() => handleBooking(court, slot)}
                disabled={isBooked}
              >
                <Text style={styles.slotText}>
                  {slot} {isBooked ? '(Booked)' : ''}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

export default BadmintonBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  courtContainer: {
    marginBottom: 30,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  courtTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  slotButton: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
  },
  bookedSlot: {
    backgroundColor: '#ccc',
  },
  slotText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
