

import * as SecureStore from 'expo-secure-store';


const GEMINI_KEY_NAME = 'gemini_api_key';

export async function saveApiKey(value: string): Promise<boolean> {
  try {
    await SecureStore.setItemAsync(GEMINI_KEY_NAME, value);
    return true;
  } catch (error) {
    console.error('Failed to save API key to secure storage:', error);
    return false;
  }
}

export async function getApiKey(): Promise<string | null> {
  try {
    const value = await SecureStore.getItemAsync(GEMINI_KEY_NAME);
    return value;
  } catch (error) {
    console.error('Failed to retrieve API key from secure storage:', error);
    return null;
  }
}

export async function deleteApiKey(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(GEMINI_KEY_NAME);
  } catch (error) {
    console.error('Failed to delete API key:', error);
  }
}
