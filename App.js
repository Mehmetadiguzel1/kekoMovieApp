import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainRoot from "./app/pages/MainRoot";
import MovieDetail from "./app/pages/MovieDetail";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerShown: false,
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="MainRoot"
          component={MainRoot}
          options={{ title: "MainRoot" }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{ title: "MovieDetail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
