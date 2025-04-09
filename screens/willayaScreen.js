import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // تأكدي باللي مثبتة مكتبة expo/vector-icons

const wilayas = [
  "01 - Adrar", "02 - Chlef", "03 - Laghouat", "04 - Oum El Bouaghi",
  "05 - Batna", "06 - Bejaia", "07 - Biskra", "08 - Bechar",
  "09 - Blida", "10 - Bouira", "11 - Tamanrasset", "12 - Tebessa",
  "13 - Tlemcen", "14 - Tiaret", "15 - Tizi Ouzou", "16 - Algiers",
  "17 - Djelfa", "18 - Jijel", "19 - Setif", "20 - Saida",
  "21 - Skikda", "22 - Sidi Bel Abbes", "23 - Annaba", "24 - Guelma",
  "25 - Constantine", "26 - Medea", "27 - Mostaganem", "28 - Msila",
  "29 - Mascar", "30 - Ouargla", "31 - Oran", "32 - El Bayadh",
  "33 - Illizi", "34 - Bordj Bou Arreridj", "35 - Boumerdes",
  "36 - El Tarf", "37 - Tindouf", "38 - Tissemsilt", "39 - El Oued",
  "40 - Khenchela", "41 - Souk Ahras", "42 - Tipaza", "43 - Mila",
  "44 - Ain Defla", "45 - Naama", "46 - Ain Temouchent", "47 - Ghardaia",
  "48 - Relizane", "49 - Timimoun", "50 - Bordj Badji Mokhtar",
  "51 - Ouled Djellal", "52 - Beni Abbes", "53 - In Salah",
  "54 - In Guezzam", "55 - Touggourt", "56 - Djanet", "57 - El MGhair",
  "58 - El Meniaa"
];

const WillayaScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedWilaya, setSelectedWilaya] = useState(null);

  const filteredWilayas = wilayas.filter((wilaya) =>
    wilaya.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Back button + title */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Your Wilaya</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search For A Wilaya"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredWilayas}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setSelectedWilaya(item)}
          >
            <Ionicons 
              name={selectedWilaya === item ? "radio-button-on" : "radio-button-off"} 
              size={24} 
              color={selectedWilaya === item ? "#000080" : "gray"} 
              style={{ marginRight: 10 }} 
            />
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[styles.button, selectedWilaya ? styles.buttonActive : styles.buttonDisabled]}
        disabled={!selectedWilaya}
        onPress={() => navigation.navigate('Catigory')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 15,
  },
  header: { fontSize: 20, fontWeight: "bold", marginLeft: 10, color: "#000080", },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000080",
    borderRadius: 10,
    marginBottom: 10,
    color: "#374151",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  itemText: { fontSize: 16 },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonActive: { backgroundColor: "#000080" },
  buttonDisabled: { backgroundColor: "#ccc" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default WillayaScreen;
