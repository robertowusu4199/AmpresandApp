import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile"; 
//import {QRCode} from "react-native-custom-qr-codes-expo"; 

const QRScanHomeScreen = ({navigation}) => {
    const handleClick = () => {
        navigation.navigate("Scanner")
    }
    
    return(
        <View style={styles.container}>

           <View>
                <NavBar navText="THE CEOs" />
            </View>

            <View style={styles.containerText}>
                <Text style={styles.firstText}>Exchange Contact Information</Text>
                <Text style={styles.secondText}>Scan this QR below to share your contacts</Text>
            </View>

            <View>
                {/*<QRCode content="https://reactnative.com"/>*/} 
            </View>

            <View style={styles.profile}>
                <Profile name = "Robby Blacka" jobDescription = "Software Developer"
                    image = {require("../../assets/images/guy.jpg")} />
            </View>

            <View style={styles.borderLine}></View>

            <View style={styles.scanQRContainer}>
                <Text style={styles.text}>Want to add a new connection?</Text>
                <TouchableOpacity style={styles.scanQR} onPress = {handleClick}>
                    <Text style={styles.lastText}>Scan QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QRScanHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

containerText: {
    flex: 0.1,
    marginHorizontal: 40,
    marginVertical:40,
},

firstText: {
    fontSize: 18,
    fontWeight: "400",
    marginVertical: 20,
}, 

secondText: {
    fontSize: 18,
    color: "grey"
}, 

profile: {
    flex: 0.1,
    marginHorizontal: 40,
    paddingTop: 50,
},

borderLine: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
    marginTop: 150,
},

scanQRContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",   
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: -45,
},

text: {
    fontSize: 16,
},

scanQR: {
    width: "50",
    height: 30,
    alignItems: "center",
    justifyContent: "center",    
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 3,
},

lastText: {
    color: "red",
    marginHorizontal: 2,
    marginVertical: 2,
}

})