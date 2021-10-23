import React from "react";
import {SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet} from "react-native";

const Welcome = ({navigation}) => {
    const handleRegister = () => {
        navigation.navigate('Register')
    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    return(
        <SafeAreaView>
            <View>
                <Image style={styles.image} source = {require("../../assets/images/rest.jpg")}/>
            </View>

            <View>
                <Text style={styles.firstText}>KEEP IN TOUCH WITH THE PEOPLE OF CEOs</Text>

                <Text style={styles.secondText}>Sign in or register with you coe email</Text>
            </View>

            <View  style={styles.regContainer}>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.regTex}>REGISTER</Text>
                    <View style={styles.lineRed}></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignIn}>
                    <Text>SIGN IN</Text>
                    <View style={styles.lineRed2}></View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },

    image: {
        height: 355,
        width: 360,
    },

    firstText: {
        fontSize: 18,
        marginHorizontal: 8,
        marginTop: 15,
    },

    secondText: {
        fontSize: 15,
        fontWeight: "100",
        marginHorizontal: 8,
        marginTop: 5,
        marginBottom: 150,
        color: "grey",
    },

    regContainer: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 60,
    },

    lineRed: {
        width: 62,
        height: 2,
        backgroundColor: '#b30000',
    },

    lineRed2: {
        width: 53,
        height: 2,
        backgroundColor: '#b30000',
    },

})