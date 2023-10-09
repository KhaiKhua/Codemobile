import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';

export default function Screen3b() {
    const imgblack = { uri: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/j/o/joy-3-1_7.png' };
    const imgbred = { uri: '' }
    const imgwhite = { uri: '' }
    const imggreen = { uri: '' }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
             <ImageBackground source={imgblack} style={styles.img} resizeMode='contain' ></ImageBackground>
             <View style={{}}>
                <Text style={{fontSize: '16px', textAlign: 'left', paddingTop: '7px'}}>Điện thoại Vsmart Joy </Text>
                <Text style={{fontSize: '16px', textAlign: 'left', paddingTop: '7px'}}>Hàng chính hãng</Text>
             </View>
            </View>
            <View styles={styles.form1}>
                <Text style={{fontSize: '16px', textAlign: 'left'}}> Chọn một màu bên dưới </Text>
               <View style={styles.formcolor}>
                <TouchableOpacity style={{backgroundColor:'white',width:'90px',height:'90px',marginTop:'10px'}}></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'red',width:'90px',height:'90px',marginTop:'10px'}}></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'black',width:'90px',height:'90px',marginTop:'10px'}}></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'blue',width:'90px',height:'90px',marginTop:'10px'}}></TouchableOpacity>
               </View>
               <TouchableOpacity style={styles.button} onPress={()=>alert('đã đặt mua')}>
                 <Text style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>XONG</Text>
                </TouchableOpacity>
            </View> 
           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor:'gray',
    },
    row: {
        flexDirection: 'row',
        height:'21%',
        backgroundColor:'white'
    },
    form1:{
        flexDirection: 'row',
        height:'79%',
         justifyContent:'flex-start',
       
    },
    img: {
        height: '100px',
        width: '150px',
    },
    formcolor:{
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    button: {
        height: 50,
        width: '90%',
        backgroundColor: 'blue',
        marginLeft: '5%',
        marginTop: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },

});

