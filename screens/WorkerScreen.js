import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const WorkerScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birthDate: null,
    city: "",
    gender: "",
  });

  const [isGenderModalVisible, setGenderModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // تحديث البيانات
  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  // اختيار صورة من المعرض
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // التأكد إذا كانت كل الحقول معمرة
  const isFormComplete =
    profile.lastName &&
    profile.firstName &&
    profile.email &&
    profile.birthDate &&
    profile.city &&
    profile.gender;

  return (
    <View style={styles.container}>
      {/* صورة البروفايل */}
      <TouchableOpacity onPress={pickImage} style={styles.profileContainer}>
        <Image
          source={image ? { uri: image } : require("../assets/image/welcome.jpg")}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={pickImage} style={styles.editIcon}>
          <Ionicons name="camera" size={18} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* الحقول */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="gray"
        value={profile.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="gray"
        value={profile.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={profile.email}
        onChangeText={(text) => handleChange("email", text)}
      />

      {/* اختيار تاريخ الميلاد */}
      <TouchableOpacity
        style={styles.dateInput}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={[styles.dateText, !profile.birthDate && styles.placeholderText]}>
          {profile.birthDate
            ? profile.birthDate.toLocaleDateString("en-GB")
            : "Select Date"}
        </Text>
        <Ionicons name="calendar" size={20} color="black" />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={profile.birthDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              handleChange("birthDate", selectedDate);
            }
          }}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="City"
        placeholderTextColor="gray"
        value={profile.city}
        onChangeText={(text) => handleChange("city", text)}
      />

      {/* اختيار الجنس */}
      <TouchableOpacity
        style={styles.genderButton}
        onPress={() => setGenderModalVisible(!isGenderModalVisible)}
      >
        <Text style={[styles.genderText, !profile.gender && styles.placeholderText]}>
          {profile.gender ? profile.gender : "Select Gender"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      {isGenderModalVisible && (
        <View style={styles.genderOptions}>
          <TouchableOpacity
            onPress={() => {
              handleChange("gender", "Male");
              setGenderModalVisible(false);
            }}
          >
            <Text style={styles.modalButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleChange("gender", "Female");
              setGenderModalVisible(false);
            }}
          >
            <Text style={styles.modalButtonText}>Female</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* زر Next يكون رمادي إذا كان معطل */}
      <TouchableOpacity
  style={[
    styles.nextButton,
    { backgroundColor: isFormComplete ? "#001F73" : "#ccc" },
  ]}
  disabled={!isFormComplete}
  onPress={() => navigation.navigate("Main")}
>
  <Text style={styles.nextText}>Next</Text>
</TouchableOpacity>

    </View>
  );
};

// **التنسيق (Styles)**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 80,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },
  input: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  placeholderText: {
    color: "gray",
  },
  dateInput: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
  },
  genderButton: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  genderOptions: {
    width: "80%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  modalButtonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
  },
  nextButton: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  nextText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WorkerScreen;
