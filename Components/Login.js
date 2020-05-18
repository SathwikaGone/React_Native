import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Buttons from "./Buttons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  onChangeEmailHandler = (value) => {
    setEmail(value);
  };
  onChangePasswordHandler = (value) => {
    setPassword(value);
  };

  return (
    <View style={styles.login}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.form}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={this.onChangeEmailHandler}
        />
        <Text style={styles.text}>Password </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          onChangeText={this.onChangePasswordHandler}
        />
      </View>
      <Buttons email={email} password={password} />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: "80%",
    padding: 10,
    margin: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 0.26,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  form: {
    padding: 20,
  },
  text: {
    paddingTop: 15,
    fontSize: 16,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
