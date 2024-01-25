import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Button,
} from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter both username and password");
      return;
    }
    console.log("Login successful");
  };

  const handleSignupClick = () => {
    console.log("Sign up clicked");
  };

  const handleForgotPasswordClick = () => {
    console.log("Forgot password clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        placeholder="Enter your password"
      />

      <Text style={styles.forgetPass} onPress={handleForgotPasswordClick}>
        Forgot your password? Click here.
      </Text>

      <Button onPress={handleLogin} title="Log In"></Button>
      <Text style={styles.linkText} onPress={handleSignupClick}>
        Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "darkblue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  linkText: {
    color: "deepskyblue",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgetPass: {
    marginBottom: 10,
    color: "gray",
  },
});

export default LoginScreen;