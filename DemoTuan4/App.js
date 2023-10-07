import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Demo2_a from './Screen/Demo2_a';
import Demo2a from './Screen/Demo2_a';
import Demo2b from './Screen/Demo2_b';
import Demo2c from './Screen/Demo2_c';
export default function App() {
  return (
    <View style={styles.container}>
     <Demo2a></Demo2a>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
