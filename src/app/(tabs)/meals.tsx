import { globalStyles } from "@/styles/global";
import { Text, ScrollView } from "react-native";
import { Link } from "../../../.expo/types/router";

export default function MealsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
      <Link href="/add-meal" style={globalStyles.link}>
        Add New Meal
      </Link>
    </ScrollView>
  );
}
