import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SaveScreen = () => {
  // بيانات وهمية للمستخدم
  const user = {
    name: 'Maria',
    image: require('../assets/image/17.jpg'),  
  };

  return (
    <View style={styles.container}>
      {/* رأس الشاشة */}
      <View style={styles.header}>
        <Image source={user.image} style={styles.avatar} />
        <View>
          <Text style={styles.welcome}>Welcome Back,</Text>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>

      {/* خانة البحث */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Search your saved"
        />
        <Ionicons name="search" size={20} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  welcome: {
    fontSize: 14,
    color: '#444',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
});

export default SaveScreen;