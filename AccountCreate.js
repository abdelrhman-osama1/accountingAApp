import React from "react"
import { Button,View, FlatList, platform, AppRegistry, Text, SafeAreaView, StyleSheet, ImageBackground, Image, Pressable, Dimensions,Alert, TextInput } from 'react-native'
import GlobalStyles from "./GlobalStyles"
import homePage from "./img/HomepageWallpaper.jpg"
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const{height, width} = Dimensions.get('window');


const AccountCreate = ({navigation}) => {
    return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <Text style={styles.header}>الصفحه الرئيسيه</Text>
        <ImageBackground source={homePage} resizeMode="cover" style={styles.bg}>
<View style={styles.div}>
<AntDesign name="shoppingcart" style={styles.cart} size={50} />
        <Text style={[styles.text, styles.shadow]}> حسابك=20000</Text>
        </View>
        <Pressable>
            <Text style={[styles.edit, styles.shadow]}>تعديل الحساب</Text>
        </Pressable>
        <View style={styles.bottom} >
    <View style={styles.footer}>
        <Pressable onPress={() => navigation.navigate("Stock")}>
            <Image style={styles.img} source={require('./img/Store.jpg')}></Image>
        <Text style={styles.nav}>المخزون</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Bills")}>
        <Image style={styles.img} source={require('./img/Bill.png')}></Image>
        <Text style={styles.nav}>فواتير</Text>
        </Pressable> 
        <Pressable onPress={() => navigation.navigate("Debt")}>
        <Image style={styles.img} source={require('./img/Debt.png')}></Image>
        <Text style={styles.nav}>ديون</Text>
        </Pressable>
    </View>
    </View>
        </ImageBackground>
    </SafeAreaView>
    
    )
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
        header: {
            color:"white",
            zIndex: 2,
            fontSize: 19,
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: '#323234',
            borderColor:'#707070' ,
            width: '100%',
            height: 45 ,
            fontFamily: "NotoKufiArabic-ExtraBold",
            paddingRight:15,
        },
    cart: {
        color: "#134403",
        left:60,
        shadowColor: "red"
    },
    div: {
        position:'relative',
        bottom: 70
    },
bg: {
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
    borderColor: '#359000',
    borderWidth: 1,
    fontFamily: "NotoKufiArabic-ExtraBold",
    paddingRight:15,
},
shadow : {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 22,
    },
    shadowOpacity: 0.58,
    shadowRadius: 0.00,
    
    elevation: 15,
},
edit: {
    color:"#000000",
    zIndex: 2,
    fontSize: 19,
    backgroundColor: 'white',
    width: 160,
    borderRadius:22,
    borderColor: '#359000',
    borderWidth: 1,
    fontFamily: "NotoKufiArabic-ExtraBold",
    paddingRight:15,
    right : '22%',
    top: 130
},
footer: {
    position: ('relative') ,
backgroundColor: '#323234',
width:"100%" ,
flexDirection: 'row',
justifyContent: 'center',
height: 50,
paddingLeft: 90,
borderWidth: 1,
borderColor: '#707070',

},
nav: {
    marginRight: 100,
    color: 'white',
},
bottom: {
    position: "absolute",
    height:50,
    bottom: 0
},
img: {
    width: 30,
    height: 30,
    borderRadius: 7
}
})

export default AccountCreate 