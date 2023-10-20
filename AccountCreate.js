import React from "react"
import { Button,View, platform, AppRegistry, Text, SafeAreaView, StyleSheet, ImageBackground, Pressable, Dimensions,Alert, TextInput } from 'react-native'
import GlobalStyles from "./GlobalStyles"
import homePage from "./img/HomepageWallpaper.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const AccountCreate = () => {
    return (
    <View style={styles.container}>
        <ImageBackground source={homePage} resizeMode="cover" style={styles.img}>
        <FontAwesomeIcon icon="fa-cart-shopping" style={styles.cart} size={60}/>
        <Text style={styles.text}> رصيدك=20000</Text>
    
        </ImageBackground>
    </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
    cart: {
        color: "#359000",
    },
img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
text: {
    color:"#000000",
    zIndex: 2,
    fontSize: 19,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 190,
    borderRadius:22,
    fontFamily: "NotoKufiArabic-ExtraBold",
    paddingRight:15,
    borderColor: "#359000",
    borderWidth:1,
}
})

export default AccountCreate