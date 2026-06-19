
import * as SecureStore from 'expo-secure-store';

const userApiKey = await SecureStore.getItemAsync('user_llm_key');

const response = await fetch(`{LLM_API_ENDPOINT}`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${userApiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ /* payload */ }),
});