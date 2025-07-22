export const speak = (text: string, lang: string = 'fa-IR', rate: number = 0.9): void => {
    if ('speechSynthesis' in window && text) {
        // Cancel any ongoing speech before starting a new one.
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Speech Synthesis not supported by this browser.");
    }
};

export const cancelSpeech = (): void => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
};
