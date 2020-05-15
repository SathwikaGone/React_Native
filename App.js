import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import UserHeader from "./Components/Header";
import Login from "./Components/Login";
export default function App() {
  return (
    <View style={styles.container}>
      <UserHeader />
      <Login />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
