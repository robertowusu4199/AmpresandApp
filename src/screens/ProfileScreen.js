import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.navBar}>
                <NavBar navText="My Profile" />
            </View>
            <View style={styles.container2}>
                <View>
                    <Profile name="Koffi Chairmahn" jobDescription="Sales Executive"
                        image={require("../../assets/images/guy.jpg")} />
                </View>

                <View>
                    <View style={styles.handletContainer}>
                        <Entypo name="twitter-with-circle" size={36} color="#4d4d4d" style={styles.mediaHandlet} />
                        <Entypo name="linkedin-with-circle" size={36} color="#4d4d4d" />
                    </View>

                    <View style={styles.details}>
                        <Ionicons name="call-outline" size={14} color="black" style={styles.icons} />
                        <Text>+233 (055) 979 021</Text>
                    </View>

                    <View style={styles.details}>
                        <SimpleLineIcons name="envelope" size={14} color="black" style={styles.icons} />
                        <Text>robby@theceo.com</Text>
                    </View>

                    <View style={styles.details}>
                        <EvilIcons name="location" size={20} color="black" style={styles.icons} />
                        <Text>Accra, Ghana</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    navBar: {
        marginBottom: 40,
    },

    container2: {
       flex : 1,
       marginHorizontal : 40,
       marginVertical : 50,
    },

    handletContainer: {
        flexDirection: "row",
        marginVertical: 30,
    },

    mediaHandlet: {
        paddingRight: 10,
    },

    details: {
        flexDirection: 'row',
        marginVertical: 12,
    },

    icons: {
        paddingRight: 10,
    },

    texts: {
        fontSize: 16,
    }

})