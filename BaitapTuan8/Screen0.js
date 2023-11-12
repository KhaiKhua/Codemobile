import { useScrollToTop } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, TextInput } from 'react-native';

export default function Screen0({navigation}) {
    const[matkhau,setMatKhau]= useState("1")
    const[user,setUser]= useState("1");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://65448b555a0b4b04436c7ca5.mockapi.io/image')
            .then((response) => response.json())
            .then((json) => {
                setData(json)

            })
    }, []);
    function dangNhap() {
        if (matkhau !== "" && user !== "") {
            let userFound = null;
        
            data.map((item) => {
              if (item.id === user) {
                userFound = item;
              }
            });
        
            if (userFound) {
                // console.log({userFound})
              if (matkhau === userFound.id) {
                // Đăng nhập thành công, chuyển hướng đến màn hình Screen1
                navigation.navigate('Screen1');
              } else {
                alert('Nhập sai mật khẩu');
              }
            } else {
              alert('Không tồn tại tên tài khoản');
            }
          } else {
            alert('Cần nhập đầy đủ thông tin');
          }
    }
    function dangKy(){
        
    }
    
    return(
        <View style={styles.container}>
            <View style={{height:'80',width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:'20',fontWeight:'bold',color:'blue',height:'100%'}}>ĐĂNG NHẬP</Text>
            </View>

            <TextInput placeholder="    Tên đăng nhập" style={{borderRadius:10, height:60,width:'80%',backgroundColor:'gray',justifyContent:'flex-start',alignItems:'center',marginTop:50}}
            value={user} onChangeText={(text) => setUser(text)} ></TextInput>
            <TextInput placeholder="    Mật khẩu" style={{borderRadius:10, height:60,width:'80%',backgroundColor:'gray',justifyContent:'flex-start',alignItems:'center',marginTop:20}} secureTextEntry={true} 
             value={matkhau} onChangeText={(text) => setMatKhau(text)}></TextInput>

            <TouchableOpacity style={{borderRadius:25,backgroundColor:'#FFA500',width:'80%',height:50,justifyContent:"center",alignItems:"center",marginTop:40}} onPress={dangNhap}>
                    <Text style={{color:'white',fontWeight:'bold'}}>ĐĂNG NHẬP</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:25,backgroundColor:'blue',width:'80%',height:50,justifyContent:"center",alignItems:"center",marginTop:20}} onPress={()=>alert(`${matkhau}`)}>
                    <Text style={{color:'white',fontWeight:'bold'}}> ĐĂNG KÝ </Text> 
            </TouchableOpacity>

            
        </View>

    );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
         justifyContent:'center',
         alignItems:'center',
         
        },
      });
      