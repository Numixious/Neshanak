
import React from 'react';
import { Screen, NavigationData } from '../types';
import { writingCurriculum } from '../data/writingCurriculum';
import type { CurriculumItem } from '../data/curriculum';

interface WritingMenuScreenProps {
  navigateTo: (screen: Screen, data?: NavigationData) => void;
}

const Card: React.FC<{ item: CurriculumItem, onClick: () => void }> = ({ item, onClick }) => (
    <button
        onClick={onClick}
        className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center"
    >
        <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
        <h3 className="text-2xl font-bold text-brand-text dark:text-slate-100 mb-2">{item.title}</h3>
        {item.description && <p className="text-slate-600 dark:text-slate-400 flex-grow">{item.description}</p>}
    </button>
);


const WritingMenuScreen: React.FC<WritingMenuScreenProps> = ({ navigateTo }) => {
  
  const handleItemClick = (item: CurriculumItem) => {
      const screen = item.targetScreen || Screen.CONTENT_PLACEHOLDER;
      navigateTo(screen, { menuItem: item });
  };
  
  return (
    <div className="flex flex-col items-center p-4 md:p-8 text-center animate-jump-in">
      <h2 className="text-4xl md:text-5xl font-bold text-brand-text dark:text-slate-100 mb-4">چه چیزی دوست داری بنویسی؟</h2>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">یک بخش را برای شروع انتخاب کن.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
        {writingCurriculum.map(item => (
            <Card key={item.id} item={item} onClick={() => handleItemClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default WritingMenuScreen;
