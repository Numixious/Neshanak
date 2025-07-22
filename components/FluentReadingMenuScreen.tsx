import React from 'react';
import { Screen, NavigationData } from '../types';
import { fluentReadingData, Story } from '../data/fluentReadingData';
import { CurriculumItem } from '../data/curriculum';

interface FluentReadingMenuScreenProps {
  navigateTo: (screen: Screen, data?: NavigationData) => void;
}

const FluentReadingMenuScreen: React.FC<FluentReadingMenuScreenProps> = ({ navigateTo }) => {
  
  const handleStoryClick = (story: Story) => {
    // We create a temporary CurriculumItem just for the title, as the story screen doesn't depend on a real curriculum item
    const menuItem: CurriculumItem = { id: story.id, title: story.title };
    navigateTo(Screen.FLUENT_READING_STORY, { menuItem, story });
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 animate-jump-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text dark:text-slate-100 mb-2">روان خوانی</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400">یک داستان را برای خواندن انتخاب کن.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fluentReadingData.map((story) => (
          <button
            key={story.id}
            onClick={() => handleStoryClick(story)}
            className="group text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:ring-2 hover:ring-brand-primary dark:hover:ring-brand-primary-light"
          >
            <h3 className="text-2xl font-bold text-brand-primary dark:text-brand-primary-light mb-2">{story.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FluentReadingMenuScreen;
