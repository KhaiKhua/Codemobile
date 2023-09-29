import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, img } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
function Bai7() {


    return <SafeAreaView style={{ flex: 1 }}>


        <View style={style.container}>


            <View style={style.title}>
                <h1 style={{ fontWeight: 'bold', margin:10 }} >LOGIN </h1>
            </View>
            <View style={style.form}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 80 }}>

                    <View style={style.email}>
                        <input type='text' style={style.input} placeholder="Email">

                        </input>
                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                            <FaUser size={16} />
                        </span>
                    </View>
                    <View style={style.email}>
                        <input type='text' style={style.input} placeholder="Password">

                        </input>
                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                            <FaLock size={16} />
                        </span>
                    </View>
                </View>
                <View style={style.buton}>
                    <button style={{ color: 'white', background: 'black', borderRadius: 5, width: '100%', fontWeight: 'bold', height: "100%" }} >VERIFY CODE </button>
                </View>
                <View style={style.text}>
                    <h3 style={{ fontWeight: 'bold' }}>CREATE ACCOUNT</h3>

                </View>
            </View>
        </View>

    </SafeAreaView >

}
const style = StyleSheet.create({
    container: {
        flex: 1,

        //justifyContent: ''
        backgroundColor: '#F0C201',
    },
    form: {
        alignItems: 'center',
    },

    input: {
        // paddingTop:"10",
        marginLeft: "1%",
        width: '100%',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingLeft: '30px'
    },


    title: {
        lineHeight: 0.1,
        alignItems: 'flex-start',
        alignItems: "flex-start",
        marginTop: 50,
        marginRight: 10,
        fontWeight: 'bold',
        with: '100%',
    },
    email: {
        marginTop: "10px",
        flexDirection: 'row',

        width: "80%"
    },
    text: {
        lineHeight: 0.1,
        alignItems: 'flex-start',
        margin: 80,
    },

    buton: {
        marginTop: 50,

        //justifyContent: 'center',
        // alignItems: 'center',
        width: '80%',
        height: 40,


    }



})
export default Bai7;

