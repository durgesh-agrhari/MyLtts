import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FoodItem = ({ item, onAdd, isSelected, count }) => {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          ₹{item.price} • {item.quantity}
        </Text>
        {count > 0 && (
          <Text style={styles.countText}>Selected: {count}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  selectedCard: {
    backgroundColor: '#e0f7df',
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  countText: {
    fontSize: 13,
    marginTop: 6,
    color: '#388e3c',
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const FoodItem = ({ item, onAdd, isSelected, count }) => {
//   return (
//     <View style={[styles.card, isSelected && styles.selectedCard]}>
//       <View>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.details}>
//           ₹{item.price} • {item.quantity}
//         </Text>
//         {count > 0 && (
//           <Text style={styles.countText}>Selected: {count}</Text>
//         )}
//       </View>
//       <TouchableOpacity style={styles.button} onPress={onAdd}>
//         <Text style={styles.buttonText}>Add</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FoodItem;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#f8f8f8',
//     padding: 14,
//     marginBottom: 12,
//     borderRadius: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 2,
//   },
//   selectedCard: {
//     backgroundColor: '#e0f7df',
//     borderColor: '#4CAF50',
//     borderWidth: 1,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   details: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 4,
//   },
//   countText: {
//     fontSize: 13,
//     marginTop: 6,
//     color: '#388e3c',
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '500',
//   },
// });



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const FoodItem = ({ item, onAdd }) => {
//   return (
//     <View style={styles.card}>
//       <View>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.details}>
//           ₹{item.price} • {item.quantity}
//         </Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={onAdd}>
//         <Text style={styles.buttonText}>Add</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FoodItem;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#f8f8f8',
//     padding: 14,
//     marginBottom: 12,
//     borderRadius: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 2,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   details: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 4,
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '500',
//   },
// });
