import {colors, globalStyles} from "@/styles/global";
import { Text, View, StyleSheet, Platform } from "react-native";

export default function HomeHeader() {
    const currentDate = new Date().toLocaleDateString(
        'en-US',
        { weekday: 'long', month: 'long', day: 'numeric' }
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>MacroMeter</Text>
            <Text style={globalStyles.empty}>Running on: {Platform.OS}</Text>
            <Text style={styles.date}>{currentDate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: 6,
        marginBottom: 12,
    },
})