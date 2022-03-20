import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class RideHistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Have a enjoyable ride</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    fontStyle:"italic",
    color: "green",
    fontSize: 50
  }
});
