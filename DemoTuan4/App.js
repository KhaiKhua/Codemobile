import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Demo2_a from './Screen/Demo2_a';
import Demo2a from './Screen/Demo2_a';
import Demo2b from './Screen/Demo2_b';
import Demo2c from './Screen/Demo2_c';
import Demo2d from './Screen/Demo2_d';
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Demo2b></Demo2b> */}
    <Demo2c></Demo2c>
    {/* <Demo2d></Demo2d> */}
    {/* <Demo2a></Demo2a> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
