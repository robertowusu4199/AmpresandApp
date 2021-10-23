import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import Input from "../components/Input";
import MadeButton from "../components/MadeButtton"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PasswordInput from "../components/PasswordInput";

const SignIn = ({navigation}) => {
    const handleSignIn = () => {
        navigation.navigate("CEO")
    }

    return (
        <KeyboardAwareScrollView>

            <SafeAreaView style={styles.container}>
                <View>

                    <View>
                        <Image style={styles.image} source={require("../../assets/images/ssdsd.jpg")} />
                    </View>

                    <View style={styles.inputs}>
                        <Input label="Email" placeholder="BlackoBest@outlook.com" require />
                        <PasswordInput label="Password" placeholder="*****" />
                    </View>

                    <View style={styles.madeContainer}>
                        <MadeButton style={styles.madeCo} textButton="SIGN IN" onPress={handleSignIn} />
                    </View>

                    <View style={styles.forgetContainer}>
                        <Text style={styles.text}>Forgot?</Text>
                        <View><Text style={styles.text}>Rest Password</Text>
                            <View style={styles.redLine}></View>
                        </View>

                    </View>

                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    barContainer: {
        marginBottom: 2,
    },

    image: {
        width: 360,
        height: 200,
    },

    inputs: {
        flex: 0.1,
        marginVertical: 80,
        marginHorizontal: 20,
    },

    madeContainer: {
        flex: 0.1,
        marginHorizontal: 15,
    },

    forgetContainer: {
        flex: 0.1,
        flexDirection: "row",
        marginHorizontal: 15,
        marginVertical: 30,
    },

    text: {
        fontSize: 15,
    },

    redLine: {
        width: 90,
        height: 2,
        backgroundColor: '#b30000',
        marginTop: 5,
    }

})