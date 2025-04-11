import React from "react";
import {NavigationContainer} from'@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplashScreen"; 
import SignInScreen from "../screens/SignInScreen";
import Signupphone from "../screens/Signupphone";
import signoptionScreen from "../screens/signoptionScreen";
import willayaScreen  from "../screens/willayaScreen";
import ChooseScreen from "../screens/ChooseScreen";
import CatigoryScreen from "../screens/CatigoryScreen";
import WorkerScreen from "../screens/WorkerScreen";
import EmployerScreen from "../screens/EmployerScreen";
import ProfilWScreen from "../screens/ProfilWScreen";
import CreatjobScreen from "../screens/CreatjobScreen";
import SummaryScreen from "../screens/SummaryScreen";
import HomeScreen from "../screens/HomeScreen";
import Tabnavigator from "./Tabnavigator";
import ExperienceScreen from "../screens/ExperienceScreen";
import AddExperienceScreen from "../screens/AddExperienceScreen";
import FormationScreen from "../screens/FormationScreen";
import AddFormationScreen from "../screens/AddFormationScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileEScreen from "../screens/ProfileEScreen"
import QuickServiceScreen from "../screens/QuickServiceScreen";
import SaveScreen from "../screens/SaveScreen";


const Stack =createNativeStackNavigator();
export default function Appnavigation(){
  
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Signin" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="option" component={signoptionScreen} options={{headerShown:false}}/>
        <Stack.Screen name="creatacc" component={Signupphone} options={{headerShown: false}}/>
        <Stack.Screen name="willaya" component={willayaScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Choose" component={ChooseScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Catigory" component={CatigoryScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Worker" component={WorkerScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Employer" component={EmployerScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profilw" component={ProfilWScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Creatjob" component={CreatjobScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Summary" component={SummaryScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="exp" component={ExperienceScreen} options={{headerShown: false}}/>
        <Stack.Screen name="addexp" component={AddExperienceScreen} options={{headerShown: false}}/>
        <Stack.Screen name="forma" component={FormationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="addFormation" component={AddFormationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Settingworker" component={SettingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ProfileE" component={ProfileEScreen} options={{headerShown: false}}/>
        <Stack.Screen name="service" component={QuickServiceScreen} options={{headerShown: false}}/>
        <Stack.Screen name="save" component={SaveScreen} options={{headerShown: false}}/>




        <Stack.Screen name='Main' component={Tabnavigator} options={{ headerShown: false }} /> 
       

       </Stack.Navigator>

    </NavigationContainer>
  )
}