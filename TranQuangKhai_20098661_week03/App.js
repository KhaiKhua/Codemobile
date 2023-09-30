import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai1 from './demo_week03/demo1';
import react from 'react';

import Bai2 from './demo_week03/demo2';
import Bai3 from './demo_week03/demo3';
import Bai4 from './demo_week03/demo4';
import Bai5 from './demo_week03/demo5';
import Bai6 from './demo_week03/demo6';
import Bai7 from './demo_week03/demo7';
import Bai8 from './demo_week03/demo8';


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
