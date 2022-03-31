import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default class Settings extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Settings Page</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
