import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.image} style={styles.image}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.textMain}>{props.name}</Text>
                    <Text style={styles.textSemi}>{props.jobDescription}</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },

    imageContainer: {
        flexDirection : 'row',
    },

    image: {
        width : 80,
        height : 80,
        borderRadius : 40
    }, 

    textContainer: {
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal: -30,
    },

    text1: {
        fontSize : 16,
        marginVertical : 10,
    },

    textSemi: {
        fontSize : 15,
        marginLeft: 49,
        color : 'grey',
    }

})