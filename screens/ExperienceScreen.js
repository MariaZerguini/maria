import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ExperienceScreen = () => {
  const navigation = useNavigation();
  const [experiences, setExperiences] = useState([]);

  const addexp = () => {
    navigation.navigate('addexp', {
      onAdd: (newExp) => {
        setExperiences([...experiences, newExp]);
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Experience</Text>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        {experiences.length === 0 ? (
          <Text style={styles.noExpText}>No experiences yet</Text>
        ) : (
          <FlatList
            data={experiences}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.expItem}>
                <Text style={styles.expText}>{item}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Bottom button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={addexp}>
          <Text style={styles.buttonText}>Add Experience</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 8,
    color: "#000080",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  noExpText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
  expItem: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
  expText: {
    fontSize: 14,
  },
  bottomButtonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor:"#000080",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default ExperienceScreen;