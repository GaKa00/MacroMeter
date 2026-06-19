

import * as SecureStore from 'expo-secure-store';


type StorageKey = 'gemini' | 'anthropic' | 'openai' | 'custom';

export async function saveApiKey( key: StorageKey, value: string): Promise<boolean> {
  try {
    await SecureStore.setItemAsync(key, value);
    return true;
  } catch (error) {
    console.error('Failed to save API key to secure storage:', error);
    return false;
  }
}

export async function getApiKey(key: StorageKey): Promise<string | null> {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value;
  } catch (error) {
    console.error('Failed to retrieve API key from secure storage:', error);
    return null;
  }
}

export async function deleteApiKey(key: StorageKey): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error('Failed to delete API key:', error);
  }
}
