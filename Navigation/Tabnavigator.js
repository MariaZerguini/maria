import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from '../screens/SignInScreen';
import EmployerScreen from '../screens/EmployerScreen';
import ProfilWScreen from "../screens/ProfilWScreen";
import ExperienceScreen from "../screens/ExperienceScreen";


const Tab = createBottomTabNavigator();

function Tabnavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;

                    if (route.name === 'Home') {
                        icon = <Feather name="home" size={22} color={focused ? "#000080" : "#000"} />;
                    } else if (route.name === 'Saved') {
                        icon = <FontAwesome6 name="bookmark" size={22} color={focused ? "#000080" : "#000"} />;
                    } else if (route.name === 'Trucking') {
                        
                        icon = (
                          <Feather name="users" size={22} color={focused ? "#000080" : "#000"} />
                      );
                      
                    } else if (route.name === 'Profile') {
                        icon = <Feather name="user" size={22} color={focused ? "#000080" : "#000"} />;
                    }

                    return (
                        <View style={styles.iconContainer}>
                            {icon}
                            {focused && <View style={styles.activeIndicator} />}
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Saved" component={SignInScreen} />
            <Tab.Screen name="Trucking" component={EmployerScreen} />
            <Tab.Screen name="Profile" component={ProfilWScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom:0,
        right: 16,
        left: 16,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
    
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeIndicator: {
        width: 20,
        height: 2,
        backgroundColor: "#000080",
        borderRadius: 1,
        marginTop: 3,
    },
});

export default Tabnavigator;