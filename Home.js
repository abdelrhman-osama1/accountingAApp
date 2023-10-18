import React from "react"
import { Button,View, platform, AppRegistry, Text, SafeAreaView, StyleSheet, ImageBackground, Pressable, Dimensions,Alert } from 'react-native'
import GlobalStyles from "./GlobalStyles"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const{height, width} = Dimensions.get('window');
import img from "./img/login2.png"


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.container]}>
        <ImageBackground source={img} resizeMode="cover" style={styles.img}>
    <Text style={styles.text}>Accounting</Text>
    <View style={styles.div}>
    <Pressable onPress={() => navigation.navigate("AccountCreate")} style={styles.Pressable}>
    <Text style={styles.textt}>انشاء حساب</Text>
    </Pressable>
    <Pressable style={styles.Pressable} >
    <Text style={styles.textt}>تسجيل دخول</Text>
    </Pressable>
    </View>
        </ImageBackground>
</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#00665F' 
    },
    div: {
    justifyContent:'center' ,
    alignItems: 'center',
    position: "absolute",
    width: wp(100),
    },
    img: {
    flex: 1,
    justifyContent: 'center'
    },
    text: {
    height: hp(70),
    color:'white',
    zIndex: 1,
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
    },
    textt: {
    color: "white"
    },
    Pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#005256',
    width: 107,
    marginTop:14,
    zIndex:1
    }
})

export default Home