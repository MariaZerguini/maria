import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // استيراد التنقل

const QuickServiceScreen = () => {
  const navigation = useNavigation(); // متغير التنقل
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false); // حالة المودال

  const isFinishDisabled = !salary || !location || !description; // الزر سيكون غير مفعل إذا كانت الحقول فارغة

  const handleFinish = () => {
    // عند الضغط على "Finish" إظهار المودال
    setSuccessModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* عرض الحقول */}
      <View style={styles.header}>
        <Text style={styles.title}>Create a Quick Service</Text> {/* تغيير النص هنا */}
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

      {/* زر Finish */}
      <TouchableOpacity
        style={[styles.button, isFinishDisabled && styles.buttonDisabled]}
        disabled={isFinishDisabled} // الزر غير مفعل إذا كانت الحقول فارغة
        onPress={handleFinish}
      >
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>

      {/* Modal Success */}
      <Modal visible={isSuccessModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.successContent}>
            <Image
              source={require('../assets/image/suc.png')} // تأكد من المسار الصحيح للصورة
              style={{ width: 80, height: 80, marginBottom: 20 }}
              resizeMode="contain"
            />

            <Text style={styles.successTitle}>Success</Text>
            <Text style={styles.successMessage}>
              Your Quick Service has been created. Our team will review it as soon as possible INCHAA ALLAH,
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
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
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
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#001F73",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
  },
  buttonDisabled: { backgroundColor: "#ddd" },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  successContent: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
  },
  successTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  successMessage: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  closeButton: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  goHomeButton: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#001F73",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuickServiceScreen;