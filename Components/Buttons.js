import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

function Buttons(props) {
  onSubmitHandler = () => {
    let data = {
      email: props.email,
      password: props.password,
    };
    this.props.dispatch(actions.loginUser(data));
  };
  return (
    <View style={styles.buttons}>
      <Button title="cancle" onPress={this.onSubmitHandler} />
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

export default connect()(Buttons);
