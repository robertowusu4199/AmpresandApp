import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, ImageBackground, StyleSheet, Platform, } from "react-native";
import Input from "../components/Input";
import { AntDesign } from "@expo/vector-icons";
import *as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MadeButton from "../components/MadeButtton";
import NavBar from "../components/NavBar";
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = ({ navigation }) => {
    const handleRegister = () => {
        navigation.navigate("CEO")
    }

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <KeyboardAwareScrollView>

            <View>
                <NavBar navText="Register" />
            </View>

            <SafeAreaView style={styles.container}>
                <View>

                    <ImageBackground source={{ uri: image }} style={{ width: 400, height: 210 }}>
                        <View>
                            <TouchableOpacity style={styles.pickerImageCon}>
                                <AntDesign name="user" size={60} color="red" onPress={pickImage} />
                                <Text onPress={pickImage} style={styles.text}>ADD PROFILE PHOTO</Text>
                                {image && <Image />}
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={styles.input}>
                        <Input label="Full Name" placeholder="Robby Blacka" />
                        <Input label="Email" placeholder="robbyblacka@gmail.com" />
                        <Input label="Phone Number" placeholder="+233 (545) 879645" />
                        <Input label="Role" placeholder="Full Stack Developer" />
                        <Input label="Twitter" placeholder="@RobBlacka.1" />
                        <Input label="LinkedIn" placeholder="/Blacka1" />
                    </View>

                </View>

                <View style={styles.madeContainer}>
                    <MadeButton textButton='REGISTER' onPress={handleRegister} />
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },

    pickerImageContainer : {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
    },

    pickerImageCon : {
        flex : 0.3,
        justifyContent : 'center',
        alignItems : 'center',
    },

    text: {
        marginVertical : 10,
        color : 'red', 
        fontSize : 15,
    },

    input : {
        flex : 0.5,
        marginVertical : 50
      
    },

    madeContainer: {
        flex: 0.1
    }

})