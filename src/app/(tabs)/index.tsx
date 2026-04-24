import { globalStyles } from "@/styles/global";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import HomeHeader from "@/app/components/HomeHeader";
import { Link, useFocusEffect } from "expo-router";
import MacroGrid from "../components/MacroGrid";
import RecentMeals from "../components/RecentMeals";
import { getMeals, Meal } from "@/storage/meals";
import { useCallback, useState } from "react";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  }

  useFocusEffect(
    useCallback(() => {
    loadMeals();
  }, []));
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroMeter</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals meals={meals}/>
    </ScrollView>
  );
}




