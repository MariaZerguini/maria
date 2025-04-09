import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timer for 4 seconds
    const timer = setTimeout(() => {
      // Navigate to the Home screen after 4 seconds
      navigation.replace('option');
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000959" }}>
      <View style={{ paddingTop: 120, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#A2CEF4' }}>Job<Text style={{ color: '#A2CEF4' }}>Bloom</Text></Text>
        <Image style={{ marginTop: 20, width: '80%', height: 200, resizeMode: 'contain' }} source={require("../assets/image/job-removebg-preview.png")} />
      </View>
    </SafeAreaView>
  );
}
