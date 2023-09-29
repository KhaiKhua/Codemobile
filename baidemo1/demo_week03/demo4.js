import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, img } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';
import React, { useState } from 'react';

function Bai4() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value.slice(0, 1));
    };
  

    return <SafeAreaView style={{ flex: 1 }}>
        

        <View style={style.container}>

          
            <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >CODE </h1></View>
            <View style={style.title}> <h3 style={{ fontWeight: 'bold' }} >VERIFICATION </h3></View>
            <View style={style.title}>
                <p>Enter ontime password sent on </p>
                <br />
                <p> ++84909260598 </p>
            </View  >
            <View style={style.input}>
                <input type='text' maxLength={1}  value={inputValue} onChange={handleInputChange} style={{ width:"16%"}}></input>
                <input type='text' maxLength={1}  value={inputValue} onChange={handleInputChange} style={{ width:"16%"}}></input>
                <input type='text' maxLength={1}  value={inputValue} onChange={handleInputChange} style={{ width:"16%"}}></input>
                <input type='text' maxLength={1}  value={inputValue} onChange={handleInputChange} style={{ width:"16%"}}></input>
                <input type='text' maxLength={1}  value={inputValue} onChange={handleInputChange} style={{ width:"16%"}}></input>
                <input type='text' maxLength={1}  value={inputValue} onChange={handleInputChange} style={{ width:"16%"}}></input>
            </View>
            <View style={style.buton}>
                <button style={{ color: 'black', background: '#F0C201', borderRadius: 5, width: '100%', fontWeight: 'bold' }} >VERIFY CODE </button>
               
            </View>
          
        </View>

    </SafeAreaView >

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
        backgroundColor: '#71E2FC',
    },

    input:{
        flexDirection: 'row',
        marginTop: 75,
        height: 50,
        width:"80%"
    },

    
    title: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 50,
        fontWeight: 'bold' 
    },
   
    buton: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        height: 40,


    }



})
export default Bai4;
