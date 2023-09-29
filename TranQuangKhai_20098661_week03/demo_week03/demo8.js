import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, img } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';
import React from 'react';
import { FaFacebook, FaUser, FaLock, FaWifi } from 'react-icons/fa';

function Bai8() {


    return <SafeAreaView style={{ flex: 1 }}>


        <View style={style.container}>


            <Image
                source={require('../assets/block.png')}
                style={style.imag}
            />

            <View style={style.email}>
                <input type='text' style={style.input} placeholder="Please input user name">

                </input>
                <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                    <FaUser size={16} />
                </span>
            </View>
            <View style={style.email}>
                <input type='text' style={style.input} placeholder="Please input password">

                </input>
                <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                    <FaLock size={16} />
                </span>
            </View>
            <View style={style.buton}>
                <button style={{ color: 'white', background: 'blue', borderRadius: 5, width: '100%', fontWeight: 'bold' }} >LOGIN </button>
            </View>
            <View style={style.text}>
                <p>Register </p>
                <p style={{ marginLeft: 140 }} > Forgot Password </p>
            </View>
            <View style={style.text}>
                <p style={{ color: 'blue' }} > -------------- </p>
                <p>Orther Login Methods </p>
                <p style={{ color: 'blue' }} > -------------- </p>
            </View>
            <View style={style.buton}>

                <button style={{ width: '20%', background: 'white', marginRight: '10%' }} > < FaUser size={24} /></button>
                <button style={{ width: '20%', background: 'yellow', marginRight: '10%' }} >< FaWifi size={24} /> </button>
                <button style={{ width: '20%', background: 'blue', marginRight: '10%' }} >< FaFacebook size={24} /> </button>
            </View>
        </View>

    </SafeAreaView >

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
        backgroundColor: 'white',
    },
    imag: {

        width: 150,
        height: 150,
        marginTop: '20%',
        marginBottom:'10%',
        backgroundColor: 'white',
    },

    input: {
        marginLeft: "1%",
        width: '100%',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingLeft: '30px'
    },
    email: {
        marginTop: "20px",
        flexDirection: 'row',
        width: "80%"
    },


    title: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 30,
        fontWeight: 'bold',

    },
    text: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',

    },

    buton: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        height: 50,


    }



})
export default Bai8;

