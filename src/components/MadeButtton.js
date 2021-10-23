import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const MadeButton = (props) => {
    return(
        <View>
            <TouchableOpacity style={styles.madeButton}>
                <Text style={styles.textButton}>{props.textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MadeButton;

const styles = StyleSheet.create ({
    madeButton: {
        backgroundColor: "red",
        width: "100",
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5,
    },

    textButton: {
        fontSize: 18,
        color: "white"
    }

})