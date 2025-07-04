import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/Header';

const dummyRideRequests = [
  {
    id: 'r1',
    name: 'Raj',
    psNumber: 'PS1001',
    from: 'Noida',
    to: 'Delhi',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 'r2',
    name: 'Anjali',
    psNumber: 'PS1002',
    from: 'Lucknow',
    to: 'Kanpur',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 'r3',
    name: 'Vikram',
    psNumber: 'PS1003',
    from: 'Pune',
    to: 'Mumbai',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];


const HomeScreen = () => {
  const [foodTicket, setFoodTicket] = useState(null);
  const [sportTicket, setSportTicket] = useState(null);
  const [rideOffer, setRideOffer] = useState(null);

  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState(dummyRideRequests);

  const handleAcceptRide = (request) => {
    setAcceptedRequests([request, ...acceptedRequests]);
    setPendingRequests(pendingRequests.filter((r) => r.id !== request.id));
  };

  const renderTicket = (title, ticket) => (
    <View style={styles.ticketCard}>
      <Text style={styles.ticketTitle}>{title}</Text>
      {ticket ? (
        <Text style={styles.ticketDetail}>{ticket}</Text>
      ) : (
        <Text style={styles.noDataText}>No ticket data</Text>
      )}
    </View>
  );

  const renderRideUserCard = (req, isAccepted = false) => (
    <View key={req.id} style={styles.requestCard}>
      <View style={styles.userInfo}>
        <Image source={{ uri: 'https://t3.ftcdn.net/jpg/05/11/55/90/360_F_511559080_X4IGkzJKv3ZrHbp2wB0MmJ3DC9noNQIr.jpg' }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{req.name}</Text>
          <Text style={styles.userPs}>PS No: 4236547564{req.psNumber}</Text>
          {/* <Text style={styles.rideRoute}>
            {req.from} ➡ {req.to}
          </Text> */}
        </View>
      </View>
      {!isAccepted && (
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() => handleAcceptRide(req)}
        >
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        {/* Ticket Sections */}
        {renderTicket('🍽 Food Ticket', foodTicket)}
        {renderTicket('🏏 Sport Booking Ticket', sportTicket)}
        {renderTicket('🚗 Ride Offer', rideOffer)}

        {/* Accepted Ride Requests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✅ Accepted Ride Requests</Text>
          {acceptedRequests.length === 0 ? (
            <Text style={styles.noDataText}>No accepted requests</Text>
          ) : (
            acceptedRequests.map((req) => renderRideUserCard(req, true))
          )}
        </View>

        {/* Pending Ride Requests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📝 Ride Requests</Text>
          {pendingRequests.length === 0 ? (
            <Text style={styles.noDataText}>No pending requests</Text>
          ) : (
            pendingRequests.map((req) => renderRideUserCard(req))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  ticketCard: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  ticketDetail: {
    marginTop: 5,
    fontSize: 16,
  },
  noDataText: {
    marginTop: 5,
    color: '#777',
    backgroundColor:'#e6e9ed',
    padding:10,borderRadius:10
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  requestCard: {
    backgroundColor: '#eaeaea',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  rideRoute: {
    fontSize: 14,
    color: '#555',
  },
  acceptButton: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  acceptText: {
    color: 'white',
    fontWeight: 'bold',
  },
  userPs: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
});



// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import Header from '../../components/Header';

// const dummyRideRequests = [
//   {
//     id: 'r1',
//     name: 'Raj from Noida to Delhi',
//   },
//   {
//     id: 'r2',
//     name: 'Anjali from Lucknow to Kanpur',
//   },
//   {
//     id: 'r3',
//     name: 'Vikram from Pune to Mumbai',
//   },
// ];

// const HomeScreen = () => {
//   const [foodTicket, setFoodTicket] = useState(null);
//   const [sportTicket, setSportTicket] = useState(null);
//   const [rideOffer, setRideOffer] = useState(null);

//   const [acceptedRequests, setAcceptedRequests] = useState([]);
//   const [pendingRequests, setPendingRequests] = useState(dummyRideRequests);

//   const handleAcceptRide = (request) => {
//     setAcceptedRequests([request, ...acceptedRequests]);
//     setPendingRequests(pendingRequests.filter((r) => r.id !== request.id));
//   };

//   const renderTicket = (title, ticket) => (
//     <View style={styles.ticketCard}>
//       <Text style={styles.ticketTitle}>{title}</Text>
//       {ticket ? (
//         <Text style={styles.ticketDetail}>{ticket}</Text>
//       ) : (
//         <Text style={styles.noDataText}>No ticket data</Text>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* Ticket Sections */}
//         {renderTicket('🍽 Food Ticket', foodTicket)}
//         {renderTicket('🏏 Sport Booking Ticket', sportTicket)}
//         {renderTicket('🚗 Ride Offer', rideOffer)}

//         {/* Accepted Ride Requests */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>✅ Accepted Ride Requests</Text>
//           {acceptedRequests.length === 0 ? (
//             <Text style={styles.noDataText}>No accepted requests</Text>
//           ) : (
//             acceptedRequests.map((req) => (
//               <View key={req.id}  style={{padding:10, backgroundColor:'#d5d8de', borderRadius:10}} >
//               <Text style={styles.rideItem}>
//                 {req.name}
//               </Text>
//               </View>
//             ))
//           )}
//         </View>

//         {/* Pending Ride Requests */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>📝 Ride Requests</Text>
//           {pendingRequests.length === 0 ? (
//             <Text style={styles.noDataText}>No pending requests</Text>
//           ) : (
//             pendingRequests.map((req) => (
//               <View key={req.id} style={styles.requestCard}>
//                 <Text style={styles.rideItem}>{req.name}</Text>
//                 <TouchableOpacity
//                   style={styles.acceptButton}
//                   onPress={() => handleAcceptRide(req)}
//                 >
//                   <Text style={styles.acceptText}>Accept</Text>
//                 </TouchableOpacity>
//               </View>
//             ))
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     padding: 16,
//     paddingBottom: 100,
//   },
//   heading: {
//     fontSize: 30,
//     color: 'blue',
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   ticketCard: {
//     backgroundColor: '#f1f1f1',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   ticketTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   ticketDetail: {
//     marginTop: 5,
//     fontSize: 16,
//   },
//   noDataText: {
//     marginTop: 5,
//     color: '#777',
//   },
//   section: {
//     marginTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 10,
//   },
//   rideItem: {
//     fontSize: 16,
//     paddingVertical: 5,
//   },
//   requestCard: {
//     backgroundColor: '#eaeaea',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   acceptButton: {
//     backgroundColor: 'green',
//     paddingVertical: 5,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//   },
//   acceptText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });


// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import Header from '../../components/Header'

// // const HomeScreen = () => {
// //   return (
// //     <View>
// //       <Header/>
// //       <Text style={{fontSize:30, color:'blue'}}>MyLtts</Text>
// //     </View>
// //   )
// // }

// // export default HomeScreen

// // const styles = StyleSheet.create({})