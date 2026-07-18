import { getApiKey } from '@/utils/storage';
import * as ImagePicker from 'expo-image-picker';




export default function PhotoScanScreen({ navigation } : { navigation: any }) {

  const scanPhotoWithLLM = async(base64Image: string) => {

      const userApiKey = await getApiKey('gemini');
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${userApiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: "Estimate the macros for this meal. Return JSON only: { mealName, calories, protein, carbs, fat }" }, // Context
            { inlineData: { mimeType: "image/jpeg", data: base64Image } }
          ]
        }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    const result = await response.json();
    return JSON.parse(result.candidates[0].content.parts[0].text);
  }

const handleTakePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return;

    const image = await ImagePicker.launchCameraAsync({
      base64: true, 
      quality: 0.5,  
    });

    if (!image.canceled && image.assets[0].base64) {
      try {
    
        const macroData = await scanPhotoWithLLM(image.assets[0].base64);
        
       
        navigation.navigate('AddMealPage', { prefilledMacros: macroData });
        
      } catch (error) {
      alert("Error, Failed to scan meal.");
      }
    }
  };

}