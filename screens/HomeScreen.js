import React, { useState } from 'react';
import {
  View, Text, TextInput, Image, ScrollView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const dummyJobs = [
    { company: 'Google LLC', position: 'UI/UX Designer', type: 'Full Time', locationType: 'Onsite', salary: '$10,000 – $20,000 / Month' },
    { company: 'Apple', position: 'Sales and Marketing', type: 'Half Time', locationType: 'Remote', salary: '$8,000 – $20,000 / Month' },
    { company: 'ChatGPT', position: 'Developer', type: 'Half Time', locationType: 'Remote', salary: '$1800 – $5000 / Month' },
    { company: 'Meta', position: 'Project Manager', type: 'Full Time', locationType: 'Remote', salary: '$9,000 – $13,000 / Month' },
    { company: 'Tesla', position: 'Electrical Engineer', type: 'Full Time', locationType: 'Onsite', salary: '$7000 – $10,000 / Month' },
    { company: 'Amazon', position: 'Backend Developer', type: 'Half Time', locationType: 'Remote', salary: '$6,000 – $9,000 / Month' },
  ];

  const filteredJobs = dummyJobs.filter(
    job =>
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      {/* Header */}
      <View style={{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 30 // 👈 هذا يخليهم يهبطوا شوية
}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/image/17.jpg')} // ✅ ضيف الصورة هنا
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
          />
          <View>
            <Text style={{ color: 'gray' }}>Welcome Back,</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>MARIA</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        padding: 6,
        backgroundColor: '#f2f2f2',
        borderRadius: 12
      }}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search For Job Or A Company"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{ marginLeft: 10, flex: 1 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
          <Ionicons name="map-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Recommendation */}
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10 }}>Recommendation</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredJobs.slice(0, 2).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ScrollView>

      {/* Quick Service Offers */}
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10 }}>Quick Service Offers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredJobs.slice(0, 2).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ScrollView>

      {/* Recent Jobs */}
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10 }}>Recent Jobs</Text>
      {filteredJobs.map((job, index) => (
        <JobCard key={index} job={job} fullWidth />
      ))}
    </ScrollView>
  );
};

const JobCard = ({ job, fullWidth = false }) => (
  <View style={{
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
    marginRight: fullWidth ? 0 : 10,
    marginBottom: 16,
    width: fullWidth ? '100%' : 250
  }}>
    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{job.company}</Text>
    <Text style={{ marginVertical: 5 }}>{job.position}</Text>
    <Text>{job.salary}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
      <Text style={{ color: job.locationType === 'Onsite' ? 'blue' : 'purple' }}>
        {job.locationType}
      </Text>
      <Text>{job.type}</Text>
    </View>
  </View>
);

export default HomeScreen;