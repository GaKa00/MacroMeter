import { Text, View, StyleSheet, Platform } from "react-native";

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
      <Text>MacroMeter</Text>
      <Text>Running on: {Platform.OS}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
