import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default class Home extends Component {
  _isMount = false;
  state = {
    isLoading: false,
    recentMovies: [],
    popularMovies: [],
  };
  componentDidMount() {
    this._isMount = true;
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=def30dcb6753a6abdcf8682057b1ed85&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.results);
      })
      .catch((error) => console.error(error));
  }
  componentWillUnmount() {
    this._isMount = false;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Home Page</Text>
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
