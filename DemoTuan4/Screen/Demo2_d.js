import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from "react";

const image = {uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg'}

export default function screenTiki_Ok(){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View >
                    <ImageBackground
                    source={image}
                    style={styles.hinh}>
                    
                    </ImageBackground>
                </View> 
                <View>
                    <Text>Nguyên hàm tích phân ứng dụng</Text>
                    <Text>Cung cấp bởi Tiki Trading</Text>
                    <Text>148.800 đ</Text>
                </View>
            </View>    

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    hinh:{
        width: '140px',
        height: '150px',
        marginLeft: '-10px',
        marginTop: '5px'
    }
})