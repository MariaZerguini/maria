import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SummaryScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    jobLevel: "",
    education: "",
    timeDuration: "",
    employedTime: "",
  });

  const [isEducationModalVisible, setEducationModalVisible] = useState(false);
  const [isEmployedTimeModalVisible, setEmployedTimeModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const educationOptions = [
    "Primary School",
    "Middle School",
    "High School",
    "Institute Diploma",
    "Higher Technician Certificate",
    "Vocational Training Certificate",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "No Educational Requirements",
  ];

  const employedTimeOptions = [
    "Full Time",
    "Morning Shift",
    "Evening Shift",
    "Night Shift",
  ];

  const isFormValid = Object.values(form).every((value) => value.trim() !== "");

  const handleFinish = () => {
    setSuccessModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* زر الرجوع */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Creatjob")}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Create Job: Summary</Text>

      {/* Job Level */}
      <TextInput
        style={styles.input}
        placeholder="Job Level"
        value={form.jobLevel}
        onChangeText={(text) => setForm({ ...form, jobLevel: text })}
      />

      {/* Education */}
      <TouchableOpacity
        style={styles.inputDropdown}
        onPress={() => setEducationModalVisible(true)}
      >
        <Text style={{ fontSize: 18, color: form.education ? "black" : "#aaa" }}>
          {form.education || "Education"}
        </Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      {/* Modal Education */}
      <Modal visible={isEducationModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={educationOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setForm({ ...form, education: item });
                    setEducationModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Time Duration */}
      <TextInput
        style={styles.input}
        placeholder="Time Duration"
        value={form.timeDuration}
        onChangeText={(text) => setForm({ ...form, timeDuration: text })}
      />

      {/* Employed Time */}
      <TouchableOpacity
        style={styles.inputDropdown}
        onPress={() => setEmployedTimeModalVisible(true)}
      >
        <Text style={{ fontSize: 18, color: form.employedTime ? "black" : "#aaa" }}>
          {form.employedTime || "Employed Time"}
        </Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      {/* Modal Employed Time */}
      <Modal visible={isEmployedTimeModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={employedTimeOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setForm({ ...form, employedTime: item });
                    setEmployedTimeModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* زر Finish */}
      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        disabled={!isFormValid}
        onPress={handleFinish}
      >
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>

      {/* Modal Success */}
      <Modal visible={isSuccessModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.successContent}>
            <Image
              source={require('../assets/image/suc.png')} // بدلي المسار للصورة تاعك
              style={{ width: 80, height: 80, marginBottom: 20 }}
              resizeMode="contain"
            />

            <Text style={styles.successTitle}>Success</Text>
            <Text style={styles.successMessage}>
              Your Job has been created. Our team will review it as soon as possible INCHAA ALLAH,
              and you can expect a response soon.
            </Text>

            {/* Close */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSuccessModalVisible(false)}
            >
              <Text style={{ color: "#001F73", fontWeight: "bold" }}>Close</Text>
            </TouchableOpacity>

            {/* Go to Home */}
            <TouchableOpacity
              style={styles.goHomeButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  backButton: { position: "absolute", top: 25, left: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginTop: 9, marginBottom: 50, textAlign: "center" },
  input: {
    width: "100%", height: 60, borderWidth: 1, borderColor: "#ddd", borderRadius: 12,
    paddingHorizontal: 15, marginBottom: 20, backgroundColor: "#F8F8F8", fontSize: 18,
  },
  inputDropdown: {
    width: "100%", height: 60, borderWidth: 1, borderColor: "#ddd", borderRadius: 12,
    paddingHorizontal: 15, marginBottom: 20, backgroundColor: "#F8F8F8", fontSize: 18,
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
  },
  button: {
    width: "100%", height: 60, backgroundColor: "#001F73", justifyContent: "center",
    alignItems: "center", borderRadius: 12, marginTop: 20,
  },
  buttonDisabled: { backgroundColor: "#ddd" },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
  modalContainer: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%", backgroundColor: "white", borderRadius: 12, padding: 20,
  },
  option: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  optionText: { fontSize: 18, textAlign: "center" },
  successContent: {
    width: "85%", backgroundColor: "white", borderRadius: 12, padding: 25, alignItems: "center",
  },
  successTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  successMessage: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  closeButton: {
    width: "80%", height: 50, borderRadius: 10, backgroundColor: "#F0F0F0",
    justifyContent: "center", alignItems: "center", marginBottom: 15,
  },
  goHomeButton: {
    width: "80%", height: 50, borderRadius: 10, backgroundColor: "#001F73",
    justifyContent: "center", alignItems: "center",
  },
});

export default SummaryScreen





