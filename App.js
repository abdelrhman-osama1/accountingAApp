import React from "react"
import { Button,View, platform, AppRegistry, Text, SafeAreaView, StyleSheet, ImageBackground, Pressable } from 'react-native'
import GlobalStyles from "./GlobalStyles"
import img from "./img/background.jpg"


const App = () => {
  return (
    <SafeAreaView style={[styles.container]}>
          <ImageBackground source={img} resizeMode="cover" style={styles.img}>
      <Text style={styles.text}>Accounting</Text>
      <View style={styles.div}>
      <Pressable style={styles.Pressable} >
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
  },
  div: {
    bottom: 200,
    alignItems: 'center',
  },
  img: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    height: 340,
    color:'#005256',
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
    marginTop:14
  }
})
export default App