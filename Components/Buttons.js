import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function Buttons() {
  return (
    <View style={styles.buttons}>
      <Button title="cancle" />

      <Button title="submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    padding: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
});
