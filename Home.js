import React from "react"
import { Button,View, platform, AppRegistry, Text, SafeAreaView, StyleSheet, ImageBackground, Pressable, Dimensions,Alert } from 'react-native'
import GlobalStyles from "./GlobalStyles"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const{height, width} = Dimensions.get('window');
import img from "./img/background.jpg"
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

const Home = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        "NotoKufiArabic-ExtraBold": require("./assets/fonts/NotoKufiArabic-ExtraBold.ttf"),
    });
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, [])

    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }
    return (
        <SafeAreaView style={[styles.container]}>
        <ImageBackground source={img} resizeMode="cover" style={styles.img}>
    <Text style={styles.text}>Accounting</Text>
    <View style={styles.div}>
    <Pressable onPress={() => navigation.navigate("AccountCreate")} style={styles.Pressable}>
    <Text style={styles.textt}>تسجيل دخول</Text>
    </Pressable>
    <Pressable onPress={() => navigation.navigate("AccountCreate")} style={styles.Pressable} >
    <Text style={styles.textt}>انشاء حساب</Text>
    </Pressable>
    </View>
        </ImageBackground>
</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    div: {
    alignItems: 'center',
    position: "absolute",
    width: wp(100),
    bottom: 50,
    },
    img: {
    flex: 1,
    justifyContent: 'center'
    },
    text: {
    height: hp(70),
    color:'#00665F',
    zIndex: 1,
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: "NotoKufiArabic-ExtraBold"
},
    textt: {
    color: "white",
    fontSize: 20,
    fontFamily: "NotoKufiArabic-ExtraBold",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10,
    },
    Pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#005256',
    width: 270,
    marginTop:14,
    zIndex:1
    }
})

export default Home