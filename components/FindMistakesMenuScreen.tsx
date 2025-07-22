import React from 'react';
import { Screen, NavigationData, FindMistakeGroup } from '../types';
import { findMistakesData } from '../data/findMistakesData';

interface FindMistakesMenuScreenProps {
  navigateTo: (screen: Screen, data?: NavigationData) => void;
}

const FindMistakesMenuScreen: React.FC<FindMistakesMenuScreenProps> = ({ navigateTo }) => {
  
  const handleItemClick = (group: FindMistakeGroup) => {
      navigateTo(Screen.WRITING_SENTENCES_FIND_MISTAKES_QUIZ, { 
          menuItem: { id: group.id, title: group.title },
          findMistakeGroup: group 
      });
  };
  
  return (
    <div className="flex flex-col items-center p-4 md:p-8 text-center animate-jump-in">
      <h2 className="text-4xl md:text-5xl font-bold text-brand-text dark:text-slate-100 mb-4">غلط‌ها را پیدا کن!</h2>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">یک بخش را برای شروع آزمون انتخاب کن.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {findMistakesData.map(group => (
             <button
                key={group.id}
                onClick={() => handleItemClick(group)}
                className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center min-h-[150px]"
            >
                <h3 className="text-2xl font-bold text-brand-primary dark:text-brand-primary-light mb-2">{group.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 flex-grow">
                    {group.questions[0].sentence.split(' ').slice(0, 4).join(' ')}...
                </p>
            </button>
        ))}
      </div>
    </div>
  );
};

export default FindMistakesMenuScreen;