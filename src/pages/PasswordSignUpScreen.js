import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import SubmitButton from "../components/UI/SubmitButton";
import Input from "../components/UI/Input";
import MediumText from "../components/UI/MediumText";
import BackArrow from "../components/UI/BackArrow";

import { SignUpContext } from "../context/SignUpContext";

export default function PasswordSignUpScreen({ navigation }) {
  const [text, setText] = useState("");
  const [signUpState, dispatch] = useContext(SignUpContext);
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MediumText style={styles.title}>My password is...</MediumText>
      <View style={{ alignItems: "center" }}>
        <Input
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Password"
          style={styles.signUpInput}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <SubmitButton
          onPress={() => {
            if (text.length < 6) {
              alert("Please make a password with at least 6 characters");
            } else {
              dispatch({ type: "PASSWORD", password: text });
              navigation.navigate("NameSignUp");
            }
          }}
        >
          Continue
        </SubmitButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, marginLeft: 30, marginTop: 20 },
  signUpInput: {
    marginTop: 40,
    marginBottom: 70,
  },
});
