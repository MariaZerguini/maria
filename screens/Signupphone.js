import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";

const Signupphone = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    iosClientId: "YOUR_IOS_CLIENT_ID",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Google Sign-In Success:", authentication);
    }
  }, [response]);

  return (
    <View style={styles.container}>

      {/* بلاصة الصورة */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/image/12.jpg')} style={styles.image} />
      </View>
            
      <Text style={styles.title}>Welcome to JobBloom 👋</Text>
      <Text style={styles.subtitle}>First time here? Nice to meet you.</Text>

      <TextInput
        label="Enter your email"
        value={input}
        onChangeText={setInput}
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

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText} onPress={() => navigation.navigate('willaya')}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
          <FontAwesome name="google" size={20} color="#DB4437" />
          <Text style={styles.googleText}>Sign Up with Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInText} onPress={() => navigation.navigate("Signin")}>
  <Text style={styles.logInText}>
    Already have an account? <Text style={{ color: "#001F73" }}>Log In</Text>
  </Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    color: '#001F73',
    marginBottom: 5,
  },
  subtitle: {
    textAlign: "left",
    color: "gray",
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  signUpButton: {
    backgroundColor: "#001F73",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "gray",
  },
  socialContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    width: "100%",
  },
  googleText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  logInText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black', 
    marginTop: 20, 
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
    width: '160%',
    height: '160%',
    resizeMode: 'contain',
  },
  
});

export default Signupphone;