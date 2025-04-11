import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    firstName: "Puerto",
    lastName: "Rico",
    email: "mariasah2003@gmail.com",
    phone: "06 23 45 67 89",
    image: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setUserData({ ...userData, image: result.assets[0].uri });
    }
  };

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#000080" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Setting</Text>
      </View>

      {/* Avatar and name */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={
              userData.image
                ? { uri: userData.image }
                : require("../assets/image/17.jpg")
            }
            style={styles.avatar}
          />
          <Ionicons
            name="pencil"
            size={20}
            color="black"
            style={styles.editIcon}
          />
        </TouchableOpacity>

        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              value={userData.firstName}
              onChangeText={(text) => handleChange("firstName", text)}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input}
              value={userData.lastName}
              onChangeText={(text) => handleChange("lastName", text)}
              placeholder="Last Name"
            />
          </>
        ) : (
          <Text style={styles.name}>
            {userData.firstName} {userData.lastName}
          </Text>
        )}
        <Text style={styles.contact}>
          {userData.email} | {userData.phone}
        </Text>
      </View>

      {/* Editable fields */}
      {isEditing && (
        <>
          <TextInput
            style={styles.input}
            value={userData.email}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={userData.phone}
            onChangeText={(text) => handleChange("phone", text)}
            placeholder="Phone"
            keyboardType="phone-pad"
          />
        </>
      )}

      {/* Notification toggle */}
      <View style={styles.section}>
        <Ionicons name="notifications-outline" size={24} color="#000080" />
        <Text style={styles.sectionText}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(val) => setNotificationsEnabled(val)}
          trackColor={{ false: "#ccc", true: "#000080" }}
          thumbColor={notificationsEnabled ? "#fff" : "#fff"}
        />
      </View>

      {/* Language & Theme */}
      <View style={styles.section}>
        <Ionicons name="language" size={24} color="#000080" />
        <Text style={styles.sectionText}>Language</Text>
        <Text style={styles.sectionValue}>English</Text>
      </View>
      <View style={styles.section}>
        <Ionicons name="contrast-outline" size={24} color="#000080" />
        <Text style={styles.sectionText}>Theme</Text>
        <Text style={styles.sectionValue}>Light mode</Text>
      </View>

      {/* Fixed Edit/Save button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setIsEditing(!isEditing)}
      >
        <Text style={styles.editButtonText}>{isEditing ? "Save" : "Edit"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000080",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
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
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000080",
  },
  contact: {
    color: "gray",
  },
  input: {
    width: "100%",
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  sectionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionValue: {
    color: "#000080",
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#000080",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsScreen;