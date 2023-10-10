import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen3a from './Screen/Creen3a';
import Screen3b from './Screen/Creen3b';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,useRef } from 'react';


// export default function App() {

//   return (
//     <View style={styles.container}>
//      {/* <Screen3a></Screen3a> */}np
//      <Screen3b></Screen3b>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
          name='Screen3a'
          component={Screen3a}
        />
        <Stack.Screen
          name='Screen3b'
          component={Screen3b} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}