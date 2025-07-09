import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

const TARGET_START_HOUR = 16; // 4 PM
const TARGET_START_MINUTE = 30;
const TARGET_END_HOUR = 17; // 5 PM
const TARGET_END_MINUTE = 30;

const SportScreen = () => {
    const navigation = useNavigation();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timeRemaining, setTimeRemaining] = useState('');
    const [isBookingActive, setIsBookingActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
            updateBookingState(now);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const updateBookingState = (now) => {
        const todayStart = new Date();
        todayStart.setHours(TARGET_START_HOUR, TARGET_START_MINUTE, 0, 0);

        const todayEnd = new Date();
        todayEnd.setHours(TARGET_END_HOUR, TARGET_END_MINUTE, 0, 0);

        if (now >= todayStart && now <= todayEnd) {
            setTimeRemaining('Booking open until 5:30 PM!');
            setIsBookingActive(true);
        } else {
            setIsBookingActive(false);

            if (now < todayStart) {
                const diff = todayStart - now;
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTimeRemaining(
                    `${hours.toString().padStart(2, '0')}:${minutes
                        .toString()
                        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} remaining to open`
                );
            } else {
                setTimeRemaining('Booking closed. Try tomorrow at 4:30 PM.');
            }
        }
    };

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <View style={styles.container}>
            {/* Header with back button */}
            <Header title="Sport Booking" showBackButton onBackPress={() => navigation.goBack()} />

            <View style={styles.content}>
                <Text style={styles.title}>Sport Booking</Text>

                <Image
                    source={require('../../../assets/clock.webp')}
                    style={styles.clockImage}
                />

                <Text style={styles.timeText}>Current Time: {formattedTime}</Text>
                <Text style={styles.remainingText}>{timeRemaining}</Text>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: isBookingActive ? '#28a745' : '#aaa' }]}
                    disabled={!isBookingActive}
                    onPress={() => alert('Booking Successful!')}
                >
                    <Text style={styles.buttonText}>
                        {isBookingActive ? 'Book Now' : 'Booking not available'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#28a745', marginTop: 20 }]}
                    onPress={() => navigation.navigate('Bookingmenu')}
                >
                    <Text style={styles.buttonText}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                 <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'white', marginTop: 20 }]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={[styles.buttonText,{color:'black'}]}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    clockImage: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    timeText: {
        fontSize: 18,
        marginBottom: 10,
    },
    remainingText: {
        fontSize: 16,
        color: '#ff6f00',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import Header from '../../../components/Header';

// const TARGET_START_HOUR = 16; // 4 PM
// const TARGET_START_MINUTE = 30; // 30 mins
// const TARGET_END_HOUR = 17; // 5 PM
// const TARGET_END_MINUTE = 30; // 30 mins

// const SportScreen = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [timeRemaining, setTimeRemaining] = useState('');
//   const [isBookingActive, setIsBookingActive] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       setCurrentTime(now);
//       updateBookingState(now);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const updateBookingState = (now) => {
//     const todayStart = new Date();
//     todayStart.setHours(TARGET_START_HOUR, TARGET_START_MINUTE, 0, 0);

//     const todayEnd = new Date();
//     todayEnd.setHours(TARGET_END_HOUR, TARGET_END_MINUTE, 0, 0);

//     if (now >= todayStart && now <= todayEnd) {
//       setTimeRemaining('Booking open until 5:30 PM!');
//       setIsBookingActive(true);
//     } else {
//       setIsBookingActive(false);

//       if (now < todayStart) {
//         const diff = todayStart - now;
//         const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((diff / (1000 * 60)) % 60);
//         const seconds = Math.floor((diff / 1000) % 60);

//         setTimeRemaining(
//           `${hours.toString().padStart(2, '0')}:${minutes
//             .toString()
//             .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} remaining to open`
//         );
//       } else {
//         setTimeRemaining('Booking closed. Try tomorrow at 4:30 PM.');
//       }
//     }
//   };

//   const formattedTime = currentTime.toLocaleTimeString();

//   return (
//     <View style={styles.container}>
//         <Header/>
//       <Text style={styles.title}>Sport Booking</Text>

//       <Image
//         source={require('../../../assets/clock.webp')} // Place your clock image in the correct path
//         style={styles.clockImage}
//       />

//       <Text style={styles.timeText}>Current Time: {formattedTime}</Text>
//       <Text style={styles.remainingText}>{timeRemaining}</Text>

//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: isBookingActive ? '#28a745' : '#aaa' }]}
//         disabled={!isBookingActive}
//         onPress={() => alert('Booking Successful!')}
//       >
//         <Text style={styles.buttonText}>
//           {isBookingActive ? 'Book Now' : 'Booking not available'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SportScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f6fa',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   clockImage: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   timeText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   remainingText: {
//     fontSize: 16,
//     color: '#ff6f00',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   button: {
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });
