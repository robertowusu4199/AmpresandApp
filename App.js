import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { createStackNavigator, StackView } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "./src/screens/GetStarted";
import Welcome from "./src/screens/Welcome";
import Register from "./src/screens/Register";
import SignIn from './src/screens/SignIn';
import { AntDesign } from "@expo/vector-icons";
import QRCodeScreen from "./src/screens/QRCodeScreen";
import Scanner from "./src/components/Scanner";
import MemberProfile from "./src/screens/MemberProfile";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileScreen from "./src/screens/profileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name="GetStarted" component={GetStarted} />
        <Stack.Screen options={{ header: () => null }} name="Welcome" component={Welcome} />
        <Stack.Screen options={({ navigation }) => {
          return {
            headerLeft: () => (
              <TouchableOpacity>
                <FontAwesome name="long-arrow-left" size={24} color="24"
                  style={{ marginLeft: 25 }}
                  onPress={() => navigation.navigate("Welcome")} />
              </TouchableOpacity>
            )
          }
        }} name="Register" component={Register} />

        <Stack.Screen options={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: 'red', height: 80 },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 18,
            },
            headerLeft: ({ }) => (
              <TouchableOpacity>
                <FontAwesome name="long-arrow-left" size={24} color="white"
                  style={{ marginLeft: 25 }}
                  onPress={() => navigation.navigate("Welcome")} />
              </TouchableOpacity>
            )
          }
        }} name="SignIn" component={SignIn} />

        <Stack.Screen options={({ navigation }) => {
          return {
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate("My Profile")}
                  style={{ marginRight: 25 }}>
                  <AntDesign name="user" size={20} color="white" />
                </TouchableOpacity>
              )
            },
            headerLeft: () => null
          }
        }} name="CEO" component={QRCodeScreen} />

        <Stack.Screen options={({ navigation }) => {
          return {
            headerLeft: ({ }) => (
              <TouchableOpacity>
                <FontAwesome name="long-arrow-left" size={24} color="white"
                  style={{ marginLeft: 25 }}
                  onPress={() => navigation.navigate("CEO")} />
              </TouchableOpacity>
            )
          }
        }} name="My Profile" component={ProfileScreen} />

        <Stack.Screen options = {({navigation}) => {
          return {
            headerLeft : ({}) => (
              <TouchableOpacity>
                <FontAwesome name="long-arrow-left" size={24} color="white"
                style = {{marginLeft : 25}} 
                onPress = {() => navigation.navigate("Scanner")} />
              </TouchableOpacity>
            )
          }
        }} name = "Member Profile" component = {MemberProfile} />

<Stack.Screen  options = { { header : () => null} } name = 'Scanner' component = {Scanner}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
