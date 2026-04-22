import { globalStyles } from "@/styles/global";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import HomeHeader from "./components/HomeHeader";

export default function HomeScreen() {
  return (
    
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroMeter</Text>
        <HomeHeader />
    </ScrollView>
  );
}


