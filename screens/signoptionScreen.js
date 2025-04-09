import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const signoptionScreen = () => {
  const navigation =useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../assets/image/welcome.jpg')} 
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>JobBloom</Text>
        <Text style={styles.subtitle}>
          "Get ready for a new beginning with JobBloom, where talents meet ideal career opportunities."
        </Text>
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('Signin')}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText} onPress={() => navigation.navigate('creatacc')}>Sign up</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'high',
    paddingTop: 40,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#001F73',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 0,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'italic',
    marginBottom: 120,
  },
  loginButton: {
    backgroundColor: '#A2CEF4',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 10,
  },
  loginText: {
    color: '#001F73',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    borderWidth: 1,
    borderColor: '#A2CEF4',
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 30,
  },
  signupText: {
    color: '#A2CEF4',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default signoptionScreen;