import { globalStyles } from "@/styles/global";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import ShareButton from "../components/ShareButton";
import HomeHeader from "@/app/components/HomeHeader";
import { Link, useFocusEffect } from "expo-router";
import MacroGrid from "../components/MacroGrid";
import RecentMeals from "../components/RecentMeals";
import { getMeals, Meal } from "@/storage/meals";
import { useCallback, useState } from "react";
import CopyButton from "../components/CopyButton";
import ReminderToggle from "../components/ReminderToggle";

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
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>MacroMeter</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      <ReminderToggle />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}




