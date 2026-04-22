import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack  screenOptions={{headerTitle: 'MacroMeter', headerTitleAlign: 'center', headerShown: false}}>;
<Stack.Screen name="index" options={{headerTitle: 'Home', headerTitleAlign: 'center'}} />
<Stack.Screen name="meals" options={{headerTitle: 'All Meals', headerTitleAlign: 'center'}} />
  </Stack>;
}
