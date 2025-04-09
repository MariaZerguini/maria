import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  'User Interface ',
  'Flutter Front-End Developer',
  'Flutter Back-End Developer',
  'React Back-End Developer',
  'Accounting and Finance',
  'Video Editor',
  'Content Creator',
  'Informatique',
];

const CatigoryScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Back Arrow + Title */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>What is Your category</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search For A Category"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              selectedCategories.includes(item) && styles.selectedCategory,
            ]}
            onPress={() => toggleCategory(item)}
          >
            <Checkbox
              status={selectedCategories.includes(item) ? 'checked' : 'unchecked'}
              color="#007bff"
            />
            <Text
              style={[
                styles.categoryText,
                selectedCategories.includes(item) && styles.selectedCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedCategories.length > 0 ? styles.nextButtonActive : styles.nextButtonInactive,
        ]}
        disabled={selectedCategories.length === 0}
      >
        <Text style={styles.nextButtonText} onPress={() => navigation.navigate('Choose')}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20, 
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000080",
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000080",
    borderRadius: 10,
    marginBottom: 10,
    color: "#374151",
  },
  categoryItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedCategory: {
    borderColor: '#007bff',
    backgroundColor: '#e0ebff',
  },
  categoryText: {
    fontSize: 16,
  },
  selectedCategoryText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonInactive: {
    backgroundColor: '#ccc',
  },
  nextButtonActive: {
    backgroundColor: '#000080',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CatigoryScreen;