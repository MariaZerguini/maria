import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ExperienceScreen() {
  const navigation = useNavigation();

  const handleAddExperience = () => {
    // هنا تقدر تضيف التنقل أو الوظيفة اللي تزيد الخبرة
    console.log('Add experience clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>experience</Text>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        {/* هنا تقدر تضيف قائمة الخبرات أو واجهة الإدخال */}
      </View>

      {/* Bottom button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddExperience}>
          <Text style={styles.buttonText}>Add experience</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  bottomButtonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00004d', // لون داكن (navy)
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});
