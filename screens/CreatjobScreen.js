
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // استيراد التنقل
import SummaryScreen from "../screens/SummaryScreen"; // تأكدي أن هذا الاستيراد صحيح
import { Ionicons } from "@expo/vector-icons"; // تأكدي أنك استوردتي الأيقونات
const CreatjobScreen = () => {
  const navigation = useNavigation(); // متغير التنقل
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const isNextDisabled = !salary || !location || !description;

  return (
    <View style={styles.container}>
      {isSummaryVisible ? (
        <SummaryScreen
          salary={salary}
          location={location}
          description={description}
          onBack={() => setIsSummaryVisible(false)}
        />
      ) : (
        <>
          {/* زر الرجوع والعنوان */}
          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Employer")} style={styles.backButton}>
  <Ionicons name="arrow-back" size={28} color="black" />
</TouchableOpacity>

            <Text style={styles.title}>Create Job</Text>
          </View>
  




          <Text style={styles.label}>Salary</Text>
          <View style={styles.salaryContainer}>
            <TextInput
              style={styles.salaryInput}
              value={salary}
              onChangeText={setSalary}
              keyboardType="numeric"
            />
            <Text style={styles.currency}>DA</Text>
          </View>

          <Text style={styles.label}>Where to work</Text>
          <TextInput style={styles.input} value={location} onChangeText={setLocation} />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: isNextDisabled ? "#ccc" : "#001F73" }]}
            disabled={isNextDisabled}
            onPress={() => setIsSummaryVisible(true)}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  

  backButton: {
    fontSize: 24,
    marginRight: 10,
  },


  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  salaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  salaryInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 15,
  },
  currency: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
    width: "100%",
  },
  textArea: {
    height: 140,
  },
  nextButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  nextText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreatjobScreen;
