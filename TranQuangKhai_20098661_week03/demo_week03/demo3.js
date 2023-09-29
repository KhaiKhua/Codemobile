import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, img } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';
import React from 'react';
import { AiOutlineUser ,AiOutlineMail} from 'react-icons/ai';

function Bai3() {

    return <SafeAreaView style={{ flex: 1 }}>


        <View style={style.container}>

            <Image
                source={require('../assets/block.png')}
                style={style.imag}
            />
            <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >FORGET </h1>
                <h1 style={{ fontWeight: 'bold' }}> PASSWORD </h1></View>
            <View style={style.title}>
                <p>Provide account's email for which you </p>
                <br />
                <p> want to reset your password </p>
            </View  >
            <View style={style.email}>
                <input type='text' style={style.input} placeholder="Email">
                </input>
                <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                    <AiOutlineMail size={16} />
                </span>
            </View>
            <View style={style.buton}>
                <button style={{ color: 'black', background: '#F0C201', borderRadius: 5, width: '100%', fontWeight: 'bold' }} >NEXT</button>

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

    email: {
        flexDirection: 'row',
        width: "80%"
    },

    imag: {

        width: 150,
        height: 150,
        marginTop: '30%',
        backgroundColor: '#71E2FC',
    },
    title: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 50,
        fontWeight: 'bold'
    },
    input: {
        marginLeft: "1%",
        width: '100%',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingLeft: '30px'
    },
    buton: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        height: 40,


    }



})
export default Bai3;