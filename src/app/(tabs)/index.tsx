import { globalStyles } from "@/styles/global";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import HomeHeader from "@/app/components/HomeHeader";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroMeter</Text>
      <HomeHeader />
      <Link href='/meals' style={globalStyles.link}>
        All Meals
      </Link>
    </ScrollView>
  );
}




