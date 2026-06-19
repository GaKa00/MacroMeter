import { colors, globalStyles } from "@/styles/global";
import { getApiKey, saveApiKey } from "@/utils/storage";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Define the supported provider types to match your storage schema
type LLMProvider = "gemini" | "openai" | "anthropic";

export default function LLMSettings() {
    const [provider, setProvider] = useState<LLMProvider>("gemini");
    const [inputKey, setInputKey] = useState("");

    // Automatically load the saved key whenever the selected provider changes
    useEffect(() => {
      async function loadKeyForProvider() {
        const storedKey = await getApiKey(provider);
        setInputKey(storedKey || "");
      }
      loadKeyForProvider();
    }, [provider]);

    const handleSave = async () => {
      if (!inputKey.trim()) {
        Alert.alert("Validation Error", "Please enter a valid API key.");
        return;
      }

      // Pass both the provider (the key) and the token (the value)
      const success = await saveApiKey(provider, inputKey.trim());
      if (success) {
        Alert.alert("Success", `${provider.toUpperCase()} key saved securely!`);
      } else {
        Alert.alert("Error", "Failed to save the key.");
      }
    };

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>LLM Settings</Text>
        
        <Text style={styles.label}>Select Provider</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={provider}
            onValueChange={(itemValue) => setProvider(itemValue as LLMProvider)}
            dropdownIconColor={colors.text}
            style={{ color: colors.text }}
          >
            <Picker.Item label="Google Gemini" value="gemini" />
            <Picker.Item label="OpenAI (GPT)" value="openai" />
            <Picker.Item label="Anthropic (Claude)" value="anthropic" />
          </Picker>
        </View>

        <Text style={styles.label}>API Key</Text>
        <TextInput
            style={styles.input}
            placeholder={`Enter your ${provider} API key`}
            placeholderTextColor={colors.textSecondary}
            value={inputKey}
            onChangeText={setInputKey}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save API Key</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.surface,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: colors.surface,
    borderRadius: 8,
    marginBottom: 20,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});