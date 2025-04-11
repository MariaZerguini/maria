import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const ProfileEScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    CompanyName: "",
    Companyemail: "",
    CEOName: "",
    NumberPhone: "",
    city: "",
    CEOgender: "",
    location: null,
  });

  const [isGenderModalVisible, setGenderModalVisible] = useState(false);
  const [isMapVisible, setMapVisible] = useState(false);
  const [image, setImage] = useState(null);

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

  // التحقق من ملء كل الحقول
  const isFormComplete =
    profile.CompanyName &&
    profile.Companyemail &&
    profile.CEOName &&
    profile.NumberPhone &&
    profile.city &&
    profile.CEOgender &&
    profile.location;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* زر الرجوع */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* أيقونة الإعدادات في أعلى اليمين */}
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("Settingworker")} // هنا تقوم بتوجيه المستخدم إلى صفحة الإعدادات
        >
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>

        {/* صورة الشركة */}
        <TouchableOpacity onPress={pickImage} style={styles.profileContainer}>
          <Image
            source={image ? { uri: image } : require("../assets/image/17.jpg")}
            style={styles.avatar}
          />
        </TouchableOpacity>

        {/* الحقول */}
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          placeholderTextColor="gray"
          value={profile.CompanyName}
          onChangeText={(text) => handleChange("CompanyName", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Company Email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          value={profile.Companyemail}
          onChangeText={(text) => handleChange("Companyemail", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CEO Name"
          placeholderTextColor="gray"
          value={profile.CEOName}
          onChangeText={(text) => handleChange("CEOName", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="gray"
          keyboardType="phone-pad"
          value={profile.NumberPhone}
          onChangeText={(text) => handleChange("NumberPhone", text)}
        />
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
          <Text style={[styles.genderText, !profile.CEOgender && styles.placeholderText]}>
            {profile.CEOgender ? profile.CEOgender : "Select Gender"}
          </Text>
          <Ionicons name="chevron-down" size={20} color="black" />
        </TouchableOpacity>

        {isGenderModalVisible && (
          <View style={styles.genderOptions}>
            <TouchableOpacity
              onPress={() => {
                handleChange("CEOgender", "Male");
                setGenderModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleChange("CEOgender", "Female");
                setGenderModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>Female</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* اختيار الموقع */}
        <TouchableOpacity style={styles.input} onPress={() => setMapVisible(true)}>
          <Text style={[styles.dateText, !profile.location && styles.placeholderText]}>
            {profile.location ? "Location Selected" : "Select Location"}
          </Text>
        </TouchableOpacity>

        {/* خريطة بملء الشاشة */}
        <Modal visible={isMapVisible} animationType="slide">
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 36.75,
                longitude: 3.06,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
              onPress={(e) => handleChange("location", e.nativeEvent.coordinate)}
            >
              {profile.location && <Marker coordinate={profile.location} />}
            </MapView>
            <TouchableOpacity
              style={styles.okButton}
              onPress={() => setMapVisible(false)}
            >
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* حقل الوظائف +Post Job */}
        <View style={styles.rowInput}>
          <Text style={styles.labelText}>+ Post Job</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Creatjob")}>
            <Text style={styles.addLink}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// **التنسيق (Styles)**
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#fff", paddingTop: 80 },
  scrollContainer: { flexGrow: 1, paddingBottom: 20 }, // Added to ensure proper scroll behavior
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  settingsButton: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    zIndex: 1,
  },
  profileContainer: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  input: { width: "80%", padding: 15, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginBottom: 10, textAlign: "center" },
  placeholderText: { color: "gray" },
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
  mapContainer: { flex: 1 },
  map: { flex: 1 },
  okButton: { padding: 15, backgroundColor: "#001F73", alignItems: "center" },
  okButtonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  rowInput: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  labelText: {
    color: "gray",
    fontSize: 16,
  },
  addLink: {
    color: "#007BFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProfileEScreen;