
/**
 * Synthesizes speech from text using Google Cloud Text-to-Speech API.
 * @param text The text to synthesize.
 * @returns An HTMLAudioElement that can be played.
 */
export async function textToSpeech(text: string): Promise<HTMLAudioElement> {
  if (!process.env.API_KEY) {
    const errorMessage = "کلید API برای سرویس صدا تنظیم نشده است.";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  const API_URL = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.API_KEY}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: { text },
        voice: { 
            languageCode: 'fa-IR', 
            name: 'fa-IR-Wavenet-A', // A standard, high-quality Persian voice
            ssmlGender: 'FEMALE' 
        },
        audioConfig: { audioEncoding: 'MP3' },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Google Cloud TTS API Error:', errorBody);
      throw new Error(`Speech synthesis failed with status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.audioContent) {
      throw new Error('No audio content received from API.');
    }

    const audioSrc = `data:audio/mp3;base64,${data.audioContent}`;
    const audio = new Audio(audioSrc);
    return audio;

  } catch (error) {
    console.error('Error in textToSpeech service:', error);
    throw error; // Re-throw the error to be handled by the caller component
  }
}
