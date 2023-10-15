import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from "react";
import { Entypo} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Sceen3a({ navigation,route}) {
  const DAU =">";
  
  const [Img,setImg]= useState({uri: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/j/o/joy-3-4g-den.jpg'});
  useEffect(() => {
    if (route.params && route.params.link) {
      // Kiểm tra xem route.params.link tồn tại và có giá trị
      setImg({ uri: route.params.link });
    }
  }, [route.params]);
 
  
  return (
    <View style={styles.container}>
     <ImageBackground source={Img} style={styles.img} resizeMode='contain' ></ImageBackground>
     <View > 
     <Text style={{fontSize: '16px', textAlign: 'left',paddingLeft:'15px', paddingTop: '7px'}}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.row}>
            <View style={styles.start}>
            {[...Array(5)].map(() => {return(
                                <Entypo name="star" size={30} color= 'yellow'/>)})}
            </View>
            <Text style={{fontSize: '16px', textAlign: 'left',paddingLeft:'15px', paddingTop: '7px'}}> (Xem 828 đánh giá)</Text>
        </View>
          <View style={styles.row}>
            <Text style={{fontSize: '16px',fontWeight:'bold' , textAlign: 'left',paddingLeft:'15px', paddingTop: '15px'}}> 1.790.000 đ </Text>
            <Text style={{fontSize: '16px', textDecorationLine:'line-through' , textAlign: 'left',paddingLeft:'30px', paddingTop: '15px'}}> 1.790.000 đ</Text>
            </View>
            <View style={styles.row}>
            <Text style={{fontSize: '14px',fontWeight:'bold' , textAlign: 'left',paddingLeft:'15px', paddingTop: '15px',color:'red'}}> Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
            <ImageBackground source={require("../Image/icon.png")} style={styles.icon} ></ImageBackground>
            </View>
         <TouchableOpacity style={styles.form4color} onPress={()=>navigation.navigate('Screen3b')}>
 
            <Text style={{fontSize: '16px', textAlign: 'center'}} >4 MÀU-CHỌN MÀU </Text>
            <Text style={{fontSize: '40px',left:'70px'}}>{DAU} </Text> 
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={()=>alert("dat hàng thành công")} >
            <Text style={{color:'white',fontSize:'20px',fontWeight:'bold'}} >CHỌN MUA </Text>
        </TouchableOpacity>
     </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
  },
 
  img:{
    height:'360px',
    width:'400px',
    

  },
  row:{
    flexDirection:'row'
  },
  form:{
    justifyContent: 'flex-start',

  },
  start:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '150px',
    marginLeft:'15px'
},
icon:{
    width:'20px',
    height:'20px',
    top:'15px',
    left:'15px',

},
button:{
    height:50,
    width:'90%',
    backgroundColor:'red',
    marginLeft:'5%',
    marginTop: '50px',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    
},
form4color:{
    height:40,
    width:'90%',
    borderRadius:10,
    borderColor:'black',
    borderWidth:'2px',
    marginLeft:'5%',
    marginTop: '30px',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
},
});
