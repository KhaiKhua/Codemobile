import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, img } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';
import React from 'react';
 import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';

function Bai6() {
   
      
    return <SafeAreaView style={{ flex: 1 }}>


        <View style={style.container}>

          
            <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >REGISTER </h1></View>
           
            <View style={{width:'100%',alignItems: 'center', marginTop: 40,}}>
                <input type='text' style={style.input} placeholder="Name">
                </input>
                <input type='text' style={style.input} placeholder="Phone">
                </input>
                <input type='text' style={style.input} placeholder="Email">
                </input>
                <input type='text' style={style.input} placeholder="Password">
                </input>
                <input type='text' style={style.input} placeholder="Birthday">
                </input>
                <View style= {style.checkbox}>
                    <input type='radio' style={{fontSize:50}}></input>
                    <p style={{fontSize:25, marginLeft:10}}>   Male </p>
                    <input type='radio' style={{fontSize:50, marginLeft:50}}></input>
                    <p style={{fontSize:25, marginLeft:10}}>   Female </p>
                </View>

            </View>
            <View style={style.buton}>
                <button style={{ color: 'white', background: 'red', borderRadius: 5, width: '100%', fontWeight: 'bold',fontSize:25 }} >REGISTER</button> 
            </View>
            <View style ={style.text}>
                <p>When you agree to terms and conditions </p>
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
    checkbox:{
        flexDirection: 'row',
        marginTop: 15,
        width: '80%',
        
    },

    input:{
        marginTop: 15,
        width: '80%',
        height: 40,
        borderRadius:5
    },

    
    title: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 50,
        fontWeight: 'bold' 
    },
    text:{
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 10,
    },
   
    buton: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
        height: 40,


    }



})
export default Bai6;

