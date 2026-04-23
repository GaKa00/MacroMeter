import { colors } from "@/styles/global";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.header },
        headerTintColor: "#fff",
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
   
    </Stack>
  );
}
