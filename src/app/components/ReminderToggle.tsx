import AsyncStorage from '@react-native-async-storage/async-storage'
import {useEffect, useState} from 'react'
import { Switch, View, Text, StyleSheet } from 'react-native'
import {colors} from '@/styles/global'
import {
  cancelMealReminders,
  requestPermissions,
  scheduleMealReminders,
} from "@/utils/notifications";

const REMINDER_KEY = 'meal_reminders_enabled';

export default function ReminderToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const loadSetting = async () => {
      const value = await AsyncStorage.getItem(REMINDER_KEY);
      setEnabled(value === 'true');
    };
    loadSetting();
  }, []);

    const toggleSwitch = async ( value: boolean ) => {
        if (value) {
          const granted = await requestPermissions();
          if(!granted) return;
            await scheduleMealReminders();
        } else {
            await cancelMealReminders();
        }
        setEnabled(value);
        await AsyncStorage.setItem(REMINDER_KEY, value.toString());
    };
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Meal Reminders</Text>
        <Switch
          value={enabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: colors.surface, true: colors.primary }}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 30,
    },
    label: {
      color: colors.text,
      fontSize: 16,
    },
  });