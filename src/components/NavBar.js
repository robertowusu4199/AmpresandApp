import { useNavigationBuilder } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const NavBar = (props) => {
    return (
        <View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.antContainer}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.TextContainer}>{props.navText}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default NavBar;

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        backgroundColor: "red",
        height: 60,
    },

    antContainer: {
        marginLeft: 50,
        marginVertical: 12,
        marginHorizontal: 550,
    },

    TextContainer: {
        marginVertical: 12,
        fontSize: 20,
        color: "white"
    }

    /*signSection: {
        backgroundColor: "red",
        height: 60,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
    },

    signText: {
        fontSize: 20,
        color: "white"
    }*/

})