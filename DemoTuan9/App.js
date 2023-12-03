// App.js
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Pressable } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

var inIntial = { count: 0 }
  // var cong ={type:'cong'}
  function recuder(state = inIntial, action) {
    switch (action.type) {
      case 'cong':
        return { count: state.count + 1 }
      case 'tru':
        return { count: state.count - 1 }
      default:
        return state;
    }
  }
 

  var store = createStore(recuder);
console.log(store?.getState().count)


export default function App() {
  const [n, setN] = useState(0);
  
  return (

    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => {
        store.dispatch({ type: 'cong' });
        setN(store.getState().count)
      }}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text>{n}</Text>

      <Pressable style={styles.button} onPress={() => {
        store.dispatch({ type: 'tru' });
        setN(store.getState().count)
      }}>
        <Text>-</Text>
      </Pressable>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 25
  },
});
