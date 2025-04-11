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

const FormationScreen = () => {
  const navigation = useNavigation();
  const [formations, setFormations] = useState([]);

  const addFormation = () => {
    navigation.navigate('addFormation', {
      onAdd: (newFormation) => {
        setFormations([...formations, newFormation]);
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
        <Text style={styles.headerText}>My Formations</Text>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        {formations.length === 0 ? (
          <Text style={styles.noFormationText}>No formations yet</Text>
        ) : (
          <FlatList
            data={formations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.formationItem}>
                <Text style={styles.formationText}>{item}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Bottom button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={addFormation}>
          <Text style={styles.buttonText}>Add Formation</Text>
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
  noFormationText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
  formationItem: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
  formationText: {
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

export default FormationScreen;