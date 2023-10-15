import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from "react";

export default function Screen3b({ navigation}) {

    const imgblack = { uri: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/j/o/joy-3-4g-den.jpg' };
    const imgbred = { uri: 'https://cdn.tgdd.vn/Products/Images/42/219208/vsmart-joy-3-4gb-den-600x600-1-200x200.jpg' };
    const imgwhite = { uri: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/j/o/joy-3-1_7.png' };
    const imggreen = { uri: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/j/o/joy-3-4g-tim.jpg' };
    const [ img,setImg ] = useState(imgblack) ;
    
    const [color, setColor] = useState("Trắng");
    const [showView, setShowView] = useState(false);
    useEffect(() => {
        if (img.uri === imgblack.uri) setColor('Đen');
        else if (img.uri === imgbred.uri) setColor('Đỏ');
        else if (img.uri === imggreen.uri) setColor('Xanh');
        else setColor('Trắng');

    }, [img])
    return (
        < React.Fragment>
            <View style={styles.container}>
                <View style={styles.row}>
                    <ImageBackground source={img} style={styles.img} resizeMode='contain' ></ImageBackground>
                    <View style={{}}>
                        <Text style={{ fontSize: '16px', textAlign: 'left', paddingTop: '7px' }}>Điện thoại Vsmart Joy </Text>
                        <Text style={{ fontSize: '16px', textAlign: 'left', paddingTop: '7px' }}>Hàng chính hãng</Text>
                        {showView && (
                            <View style={styles.create}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Màu: </Text>
                                    <Text style={styles.text}>{color}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Cung cấp bởi: </Text>
                                    <Text style={styles.text}> Tiki Tradding</Text>
                                </View>
                                <Text style={styles.text}>1.790.000 đ</Text>
                            </View>
                        )}
                    </View>
                </View>
                <View styles={styles.form1}>
                    <Text style={{ fontSize: '16px', textAlign: 'left' }}> Chọn một màu bên dưới </Text>
                    <View style={styles.formcolor}>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imgwhite); setShowView(true) }}></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'red', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imgbred); setShowView(true) }}></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'black', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imgblack); setShowView(true) }}></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'blue', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imggreen); setShowView(true) }}></TouchableOpacity>
                    </View >
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Screen3a',{link:img.uri}) }}>
                        <Text style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>XONG</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'gray',
    },
    row: {
        flexDirection: 'row',
        height: '20%',
        backgroundColor: 'white'
    },
    form1: {
        flexDirection: 'row',
        height: '80%',
        justifyContent: 'flex-start',

    },
    img: {
        height: '80px',
        width: '100px',
    },
    formcolor: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        height: 30,
        width: '90%',
        backgroundColor: 'blue',
        marginLeft: '5%',
        marginTop: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    create: {
        justifyContent: 'flex-start'

    },
    text: {
        fontWeight: 'bold',
        fontSize: '14',

    },

});

