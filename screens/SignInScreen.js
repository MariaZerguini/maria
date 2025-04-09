
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>

      {/* بلاصة الصورة */}
      <View style={styles.imageContainer}>
        { <Image source={require('../assets/image/13.jpg')} style={styles.image} /> }
      </View>

      {/* الكتابة عالطرف */}
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Hi you're been missed</Text>

      <TextInput
        label="Enter your email"
        value={email}
        onChangeText={setEmail}
        left={<TextInput.Icon icon="email-outline" />}
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureText}
        left={<TextInput.Icon icon="lock-outline" />}
        right={
          <TextInput.Icon
            icon={secureText ? "eye-off" : "eye"}
            onPress={() => setSecureText(!secureText)}
          />
        }
        style={styles.input}
      />

      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <Button mode="contained" style={styles.signInButton} onPress={() => navigation.navigate("Main")}>
        Sign In
      </Button> 



  



      <Text style={styles.orText}>You can Connect with</Text>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#DB4437" />
        <Text style={styles.googleText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate("creatacc")}>
        <Text>Don't have an account? <Text style={{ color: "#001F73" }}>Sign Up here</Text></Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '120%',
    height: '120%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
    color: "#001F73",
  },
  subtitle: {
    textAlign: "left",
    color: "gray",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    marginBottom: 15,
    borderRadius: 10,
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#001F73",
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: "#001F73",
    paddingVertical: 8,
    borderRadius: 10,
  },
  orText: {
    textAlign: "center",
    color: "gray",
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
  },
  googleText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  signUp: {
    marginTop: 25,
    alignItems: "center",
  },
});

export default SignInScreen;


