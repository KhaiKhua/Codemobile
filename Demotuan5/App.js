import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen3a from './Screen/Creen3a';
import Screen3b from './Screen/Creen3b';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Screen3a></Screen3a> */}
     <Screen3b></Screen3b>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
