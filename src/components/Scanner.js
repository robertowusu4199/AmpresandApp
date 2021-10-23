import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const Scanner = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const handleClick = () => {
        navigation.navigate("THE CEOs")
    }

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        navigation.navigate('Membership Profile')
        setScanned(true);
        //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View>
            <View>
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned} />

                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>

            <View></View>

            <View>
                <Text>Want to share your contact?</Text>

                <TouchableOpacity onPress={handleClick}>
                    <Text>Send QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Scanner;