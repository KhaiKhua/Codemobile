import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-web';

function Bai2() {

    return <SafeAreaView style={{ flex: 1 }}>
      

            <View style={style.container}>

                <View style={style.Cicleshapeview} > </View>
                <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >GROW</h1>
                    <h1 style={{ fontWeight: 'bold' }}> YOUR BUSINESS  </h1></View>
                <View style={style.title}>
                    <p>We will help you to grow your business using</p>
                    <br />
                    <p> online server</p>
                </View>
                <View style={style.buton}>
                    <button style={{ color: 'black', background: '#F0C201', borderRadius: 5, width: 100, fontWeight: 'bold' }} >LOGIN</button>
                    <button style={{ color: 'black', background: '#F0C201', borderRadius: 5, width: 100, fontWeight: 'bold' }} >SIGN UP</button>
                </View>
                <View>
                    <h4 style={{ fontWeight: 'bold' }}> HOW WE WORD?</h4>
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


    Cicleshapeview: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,

        borderColor: 'black',
        marginTop: '30%',
        borderWidth: 20,
        borderTop: '20px',

    },
    title: {
        lineHeight: 1.5,
        alignItems: 'center',
        marginTop: 50
    },
    buton: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,


    }



})
export default Bai2;