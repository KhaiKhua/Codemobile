import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Pressable } from 'react-native';
import store from './redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name:'khai'
    },
    {
      id: 2,
      name:'hung',
    },
    {
      id: 3,
      name:'manh',
    }
  ])
  const [itemName,setitemName]= useState("hahaa");
  // const dispatch = useDispatch();
  //  const items = useSelector(state => state.items);
  // const handleAddItem = () => {
  //   store.dispatch(addItem({ id: 4, name: itemName }));
  //  console.log(store.getState())
  // };

  // const handleDeleteItem = (id) => {
  //   store.dispatch(deleteItem(id));
  //   console.log(store.getState())
  // };
  return (
    <View style={styles.container}>
     {data.map((item,index)=>{return(
        <View key={index} style={styles.view}>
          <Pressable style={styles.Tou} onPress={()=>{store.dispatch(addItem({ id: 4, name: "khai" }));
                                                      setData(store?.getState().data)}}>
            <Text>
            Thêm
            </Text>
            </Pressable>
          <Text>{item.name}</Text>
          <Pressable style={styles.Tou} onPress={()=>{ store.dispatch(deleteItem(item.id));
                                                      setData(store?.getState().data)}}>
          <Text>
            Xóa
            </Text>
            </Pressable>
        </View>
    );
     })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'gray',
    height:'50',
    width:'100%',
  },
  Tou:{
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center',
    height:40,
    width:50,
  },
});
