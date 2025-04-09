import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // إضافة أيقونة السهم من Ionicons

const ChooseScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (selected === "Worker") {
      navigation.navigate("Worker");
    } else if (selected === "Employer") {
      navigation.navigate("Employer");
    }
  };

  return (
    <View style={styles.container}>
      {/* إضافة السهم في أعلى الشاشة */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionButton, selected === "Worker" && styles.selectedButton]}
        onPress={() => setSelected("Worker")}
      >
        <Text style={styles.optionText}>WORKER</Text>
        <Text style={styles.subText}>I want to find a job.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionButton, selected === "Employer" && styles.selectedButton]}
        onPress={() => setSelected("Employer")}
      >
        <Text style={styles.optionText}>EMPLOYER</Text>
        <Text style={styles.subText}>I want to find an employee.</Text>
      </TouchableOpacity>

      {/* زر Next ثابت في الأسفل */}
      <TouchableOpacity
        style={[styles.nextButton, selected && styles.activeNextButton]}
        disabled={!selected}
        onPress={handleNext}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  optionButton: {
    width: "80%",
    padding: 30,
    borderWidth: 3,
    borderColor: "#ccc",
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  selectedButton: {
    borderColor: "#000080",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#555",
  },
  nextButton: {
    position: "absolute", // جعل الزر ثابت
    bottom: 40, // مسافة من الأسفل
    width: "80%",
    padding: 18,
    borderRadius: 10,
    backgroundColor: "gray",
    alignItems: "center",
    opacity: 0.5,
  },
  activeNextButton: {
    backgroundColor: "#000080",
    opacity: 1,
  },
  nextText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChooseScreen;