import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai1 from './demo_week03/demo1';
import react from 'react';

import Bai2 from './demo_week03/demo2';
import Bai3 from './demo_week03/demo3';
export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Bai3></Bai3>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
    justifyContent: 'center',
  },
});
