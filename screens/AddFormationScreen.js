import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AddFormationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [title, setTitle] = useState('');
  const [institution, setInstitution] = useState('');
  const [place, setPlace] = useState('');
  const [locationType, setLocationType] = useState('');

  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = Array.from({ length: 30 }, (_, i) => `${1995 + i}`);
  const locationOptions = ['On site', 'From a distance', 'Hybrid', 'Freelance'];

  const handleSubmit = () => {
    const newFormation = {
      title,
      institution,
      place,
      locationType,
      start: `${startMonth} ${startYear}`,
      end: `${endMonth} ${endYear}`,
    };
    route.params?.onAdd?.(newFormation);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Add New Formation</Text>

          <View style={styles.spaceAboveBackButton} />

          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Web Development"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Institution</Text>
          <TextInput
            style={styles.input}
            placeholder="University, School, etc."
            value={institution}
            onChangeText={setInstitution}
          />

          <Text style={styles.label}>Place</Text>
          <TextInput
            style={styles.input}
            placeholder="City or address"
            value={place}
            onChangeText={setPlace}
          />

          <Text style={styles.label}>Type of Location</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={locationType}
              onValueChange={(itemValue) => setLocationType(itemValue)}
            >
              <Picker.Item label="Please select" value="" />
              {locationOptions.map((opt, idx) => (
                <Picker.Item key={idx} label={opt} value={opt} />
              ))}
            </Picker>
          </View>

          <Text style={styles.label}>Start Date</Text>
          <View style={styles.row}>
            <View style={styles.pickerWrapperHalf}>
              <Picker
                selectedValue={startMonth}
                onValueChange={(value) => setStartMonth(value)}
              >
                <Picker.Item label="Month" value="" />
                {months.map((month, i) => (
                  <Picker.Item key={i} label={month} value={month} />
                ))}
              </Picker>
            </View>
            <View style={styles.pickerWrapperHalf}>
              <Picker
                selectedValue={startYear}
                onValueChange={(value) => setStartYear(value)}
              >
                <Picker.Item label="Year" value="" />
                {years.map((year, i) => (
                  <Picker.Item key={i} label={year} value={year} />
                ))}
              </Picker>
            </View>
          </View>

          <Text style={styles.label}>End Date</Text>
          <View style={styles.row}>
            <View style={styles.pickerWrapperHalf}>
              <Picker
                selectedValue={endMonth}
                onValueChange={(value) => setEndMonth(value)}
              >
                <Picker.Item label="Month" value="" />
                {months.map((month, i) => (
                  <Picker.Item key={i} label={month} value={month} />
                ))}
              </Picker>
            </View>
            <View style={styles.pickerWrapperHalf}>
              <Picker
                selectedValue={endYear}
                onValueChange={(value) => setEndYear(value)}
              >
                <Picker.Item label="Year" value="" />
                {years.map((year, i) => (
                  <Picker.Item key={i} label={year} value={year} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={{ height: 20 }} />
        </ScrollView>
      </TouchableWithoutFeedback>

      <View style={styles.bottomButton}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add to my formation</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 80,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000080',
  },
  spaceAboveBackButton: {
    height: 30,
  },
  label: {
    marginBottom: 6,
    color: '#000080',
    fontWeight: '800',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
  },
  pickerWrapperHalf: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#000080',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default AddFormationScreen;