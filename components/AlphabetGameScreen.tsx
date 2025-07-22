import React from 'react';
import { speak } from '../services/speechService';

interface AlphabetItem {
  id: number;
  letterForms: string;
  word: string;
  emoji: string;
  sound: string;
}

const alphabetData: AlphabetItem[] = [
  { id: 1, letterForms: 'آ ا', word: 'انار', emoji: '🍎', sound: 'آ' },
  { id: 2, letterForms: 'اِ ـه', word: 'اشاره', emoji: '👋', sound: 'اِ' },
  { id: 3, letterForms: 'اُ', word: 'اردک', emoji: '🦆', sound: 'اُ' },
  { id: 4, letterForms: 'او و', word: 'میوه', emoji: '🍇', sound: 'او' },
  { id: 5, letterForms: 'ای ی', word: 'سیب', emoji: '🍎', sound: 'ای' },
  { id: 6, letterForms: 'آ ا', word: 'آتش', emoji: '🔥', sound: 'آ' },
  { id: 7, letterForms: 'بـ ب', word: 'بادام', emoji: '🌰', sound: 'ب' },
  { id: 8, letterForms: 'پـ پ', word: 'توپ', emoji: '⚽️', sound: 'پ' },
  { id: 9, letterForms: 'تـ ت', word: 'توت', emoji: '🍇', sound: 'ت' },
  { id: 10, letterForms: 'ثـ ث', word: 'مثلث', emoji: '🔺', sound: 'ث' },
  { id: 11, letterForms: 'ج ج', word: 'جنگل', emoji: '🌲', sound: 'ج' },
  { id: 12, letterForms: 'چ چ', word: 'چرخ', emoji: '☸️', sound: 'چ' },
  { id: 13, letterForms: 'ح ح', word: 'حوله', emoji: '🧖', sound: 'ح' },
  { id: 14, letterForms: 'خ خ', word: 'خرس', emoji: '🧸', sound: 'خ' },
  { id: 15, letterForms: 'د', word: 'دود', emoji: '💨', sound: 'د' },
  { id: 16, letterForms: 'ذ', word: 'ذره‌بین', emoji: '🔎', sound: 'ذ' },
  { id: 17, letterForms: 'ر', word: 'روباه', emoji: '🦊', sound: 'ر' },
  { id: 18, letterForms: 'ز', word: 'زبان', emoji: '👅', sound: 'ز' },
  { id: 19, letterForms: 'ژ', word: 'ژله', emoji: '🍮', sound: 'ژ' },
  { id: 20, letterForms: 'س س', word: 'سنگ', emoji: '🪨', sound: 'س' },
  { id: 21, letterForms: 'ش ش', word: 'شیر', emoji: '🦁', sound: 'ش' },
  { id: 22, letterForms: 'ص ص', word: 'صدف', emoji: '🐚', sound: 'ص' },
  { id: 23, letterForms: 'ض ض', word: 'ضربه', emoji: '💥', sound: 'ض' },
  { id: 24, letterForms: 'ط ط', word: 'طوطی', emoji: '🦜', sound: 'ط' },
  { id: 25, letterForms: 'ظ ظ', word: 'ظرف', emoji: '🥣', sound: 'ظ' },
  { id: 26, letterForms: 'ع ع', word: 'عینک', emoji: '👓', sound: 'ع' },
  { id: 27, letterForms: 'غ غ', word: 'قورباغه', emoji: '🐸', sound: 'غ' },
  { id: 28, letterForms: 'ف ف', word: 'فیل', emoji: '🐘', sound: 'ف' },
  { id: 29, letterForms: 'ق ق', word: 'قاشق', emoji: '🥄', sound: 'ق' },
  { id: 30, letterForms: 'ک ک', word: 'کلاه', emoji: '👒', sound: 'ک' },
  { id: 31, letterForms: 'گ گ', word: 'گرگ', emoji: '🐺', sound: 'گ' },
  { id: 32, letterForms: 'ل ل', word: 'گل', emoji: '🌸', sound: 'ل' },
  { id: 33, letterForms: 'م م', word: 'مورچه', emoji: '🐜', sound: 'م' },
  { id: 34, letterForms: 'ن ن', word: 'نان', emoji: '🍞', sound: 'ن' },
  { id: 35, letterForms: 'و', word: 'ورزش', emoji: '🏋️', sound: 'و' },
  { id: 36, letterForms: 'هـ ه', word: 'ماه', emoji: '🌙', sound: 'ه' },
  { id: 37, letterForms: 'یـ ی', word: 'یخ', emoji: '🧊', sound: 'ی' },
];


const AlphabetCard: React.FC<{ item: AlphabetItem }> = ({ item }) => {
    const handleCardClick = () => {
        const textToSpeak = `${item.sound} مثل ${item.word}`;
        speak(textToSpeak);
    };

    return (
        <button 
            onClick={handleCardClick}
            className="group perspective-1000 bg-white dark:bg-slate-800 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:scale-105"
        >
            <div className="flex flex-col h-full p-4 items-center justify-between">
                <div className="flex justify-between w-full">
                    <span className="text-4xl">{item.emoji}</span>
                    <span className="text-4xl font-bold text-brand-primary dark:text-brand-primary-light">{item.letterForms}</span>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    {/* Placeholder for potential image if needed */}
                </div>
                <div className="w-full text-center">
                    <p className="text-2xl font-semibold text-brand-text dark:text-slate-200">{item.word}</p>
                </div>
            </div>
        </button>
    );
};

const AlphabetGameScreen: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8 animate-jump-in">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text dark:text-slate-100 mb-2">جدول الفبای فارسی</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">روی هر کارت کلیک کن تا صدا و کلمه‌اش رو یاد بگیری!</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {alphabetData.map(item => (
                    <AlphabetCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default AlphabetGameScreen;
