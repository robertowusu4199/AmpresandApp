import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

const Input = (props) => {
    return(
        <View>
            <View>
                <Text>{props.label}</Text>

                <TextInput placeholder={props.placeholder}
                textAlign="right"/>
            </View>

            <View></View>

        </View>
    )
}

export default Input;

const style = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
    },
})