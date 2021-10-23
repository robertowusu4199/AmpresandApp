import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

const PasswordInput = (props) => {
    return(
        <View>
            <View>
                <Text>{props.label}</Text>
                <TextInput placeholder={props.placeholder} 
                secureTextEntry={true}
                textAlign="right"/>
            </View>

            <View></View>

        </View>
    )
}

export default PasswordInput;

const styles = StyleSheet.create({

})