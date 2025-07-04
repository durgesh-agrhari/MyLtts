import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FoodItem from './FoodItem';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const foodData = [
  { id: '1', name: 'Veg Burger', price: 99, quantity: '1 pc' },
  { id: '2', name: 'Paneer Wrap', price: 129, quantity: '1 wrap' },
  { id: '3', name: 'Masala Dosa', price: 89, quantity: '1 plate' },
  { id: '4', name: 'Chicken Biryani', price: 149, quantity: '1 bowl' },
  { id: '5', name: 'Cold Coffee', price: 59, quantity: '250ml' },
];

const FoodMenuScreen = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  const [ticketData, setTicketData] = useState(null);

  const handleAddToCart = (item) => {
    if (!cart.find((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
    } else {
      Alert.alert('Already in Cart', `${item.name} is already added.`);
    }
  };

  const handleBuyNow = () => {
    if (cart.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to cart first.');
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const ticket = {
      items: [...cart],
      total,
      generatedAt: new Date().toLocaleString(),
    };

    setTicketData(ticket);
    setCart([]);

    Alert.alert('Purchase Successful', 'Ticket generated below.');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Top Header with Back */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons size={30} name="chevron-back" color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>🍽️ Food Menu</Text>
          <View style={{ width: 30 }} />
        </View>

        {/* Food Items List */}
        {foodData.map((item) => (
          <FoodItem key={item.id} item={item} onAdd={() => handleAddToCart(item)} />
        ))}

        {/* Buy Button */}
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buyText}>Buy Now ({cart.length} items)</Text>
        </TouchableOpacity>

        {/* Ticket Display */}
        {ticketData && (
          <View style={styles.ticketContainer}>
            <Text style={styles.ticketTitle}>🎟️ Your Ticket</Text>
            {ticketData.items.map((item, index) => (
              <Text key={index} style={styles.ticketItem}>
                {index + 1}. {item.name} - ₹{item.price} ({item.quantity})
              </Text>
            ))}
            <Text style={styles.ticketTotal}>Total: ₹{ticketData.total}</Text>
            <Text style={styles.ticketTime}>Generated At: {ticketData.generatedAt}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodMenuScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  ticketContainer: {
    marginTop: 30,
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 10,
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  ticketItem: {
    fontSize: 15,
    marginBottom: 4,
  },
  ticketTotal: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  ticketTime: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
});


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Alert,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import FoodItem from './FoodItem';
// import Header from '../../components/Header';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import { useNavigation } from '@react-navigation/native';

// const foodData = [
//   { id: '1', name: 'Veg Burger', price: 99, quantity: '1 pc' },
//   { id: '2', name: 'Paneer Wrap', price: 129, quantity: '1 wrap' },
//   { id: '3', name: 'Masala Dosa', price: 89, quantity: '1 plate' },
//   { id: '4', name: 'Chicken Biryani', price: 149, quantity: '1 bowl' },
//   { id: '5', name: 'Cold Coffee', price: 59, quantity: '250ml' },
// ];

// const FoodMenuScreen = () => {
//     const navigation = useNavigation();
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (item) => {
//     if (!cart.find(cartItem => cartItem.id === item.id)) {
//       setCart([...cart, item]);
//     } else {
//       Alert.alert('Already in Cart', `${item.name} is already added.`);
//     }
//   };

//   const handleBuyNow = () => {
//     if (cart.length === 0) {
//       Alert.alert('Cart Empty', 'Please add items to cart first.');
//       return;
//     }

//     let ticket = '🎟️ Ticket Generated:\n\n';
//     cart.forEach((item, index) => {
//       ticket += `${index + 1}. ${item.name} - ₹${item.price} (${item.quantity})\n`;
//     });

//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     ticket += `\nTotal: ₹${total}`;

//     Alert.alert('Purchase Successful', ticket);
//     setCart([]); // Clear cart after purchase
//   };

//   return (
//     <SafeAreaView>
//         <Header/>
//     <ScrollView contentContainerStyle={styles.container}>
//          <View style={{flexDirection:'row', padding:10, justifyContent:'space-between'}}>
//         <TouchableOpacity onPress={()=> {navigation.goBack()}}>
//           <Ionicons size={30} name='chevron-back' color='black'  />
//         </TouchableOpacity>
//         <TouchableOpacity >
//           <Text style={styles.title}>🍽️ Food Menu</Text>
//         </TouchableOpacity>
//         <TouchableOpacity >
          
//         </TouchableOpacity>
//       </View>

//       {foodData.map(item => (
//         <FoodItem key={item.id} item={item} onAdd={() => handleAddToCart(item)} />
//       ))}

//       <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
//         <Text style={styles.buyText}>Buy Now ({cart.length} items)</Text>
//       </TouchableOpacity>
//     </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default FoodMenuScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     paddingBottom: 80,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   buyButton: {
//     backgroundColor: 'green',
//     padding: 15,
//     marginTop: 30,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buyText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });
