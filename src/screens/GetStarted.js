import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Image, Text, TouchableOpacity, StyleSheet} from "react-native";

const GetStarted = ({navigation}) => {
    const handleGetStarted = () =>{
        navigation.navigate("Welcome")
    }

    return(
        <View style={styles.container}>
            <View>
                <Image style = {styles.image} source = {require("../../assets/images/ceo.jpg")}/>
            </View>

            <View>
                <Text style={styles.amperText}>FABREGAS I</Text>

                <Text style={styles.contactText}>CONTACTS</Text>
            </View>

            <TouchableOpacity style={styles.startedCon} onPress={handleGetStarted}>
                <Text style={styles.startedText}>GET STARTED</Text>

                <View style={styles.redLine}></View>
            </TouchableOpacity>

        </View>
    )
}

export default GetStarted;

const styles = StyleSheet.create ({
    container: {
        flex: 0.0,
    },

    image : {
        width : 170,
        height : 80,
        marginTop: 120,
        marginHorizontal: 90,
    },
    
    amperText: {
        fontSize: 30,
        fontWeight: "200",
        fontStyle: "italic",
        marginTop: 100,
        marginHorizontal: 95,
    },

    contactText: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "100",
        marginHorizontal: 104,
    },

    startedCon: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },

    startedText: {
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "100",
        marginTop: 320,
    },
    
    redLine:{
        width: 100,
        height: 2,
        backgroundColor : '#b30000',
        marginLeft: 15,
    }

})