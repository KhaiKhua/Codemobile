import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, img } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';
import React from 'react';
 import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';

function Bai5() {
   
      
    return <SafeAreaView style={{ flex: 1 }}>


        <View style={style.container}>

          
            <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >LOGIN </h1></View>
           
            <View style={{width:'100%',alignItems: 'center',}}>
                <input type='text' style={style.input} placeholder="Email">
                </input>
                <input type='text' style={style.input} placeholder="Password">
                </input>
            </View>
            <View style={style.buton}>
                <button style={{ color: 'white', background: 'red', borderRadius: 5, width: '100%', fontWeight: 'bold' }} >VERIFY CODE </button> 
            </View>
            <View style ={style.text}>
                <p>When you agree to terms and conditions </p>
                <p style={{color:'blue'}}> For got your password?</p>
                <p>Or login with </p>
            </View>
            <View style={style.buton}>
             
            <button style={{  width: '33%', background:'blue' }} > < FaFacebook size={24}></FaFacebook></button>
            <button style={{  width: '33%', background:'pink' }} ><FaInstagram size={24}/ > </button>
            <button style={{  width: '33%', background:'white' }} ><FaGoogle size={24}/ > </button>
                </View>
        </View>

    </SafeAreaView >

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
        backgroundColor: 'gray',
    },

    input:{
        marginTop: 30,
        width: '80%',
        height: 40,
        borderRadius:3
    },

    
    title: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 30,
        fontWeight: 'bold' 
    },
    text:{
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 10,
    },
   
    buton: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        height: 40,


    }



})
export default Bai5;

