import React from 'react';
import { CurriculumItem } from '../data/curriculum';
import { NavigationData, Screen } from '../types';

interface MenuCategoryScreenProps {
  category: CurriculumItem;
  navigateTo: (screen: Screen, data?: NavigationData) => void;
}

const MenuCategoryScreen: React.FC<MenuCategoryScreenProps> = ({ category, navigateTo }) => {
  
  const handleItemClick = (item: CurriculumItem) => {
    const screen = item.targetScreen || Screen.CONTENT_PLACEHOLDER;
    navigateTo(screen, { menuItem: item });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text dark:text-slate-100 mb-2">{category.title}</h2>
        {category.description && <p className="text-xl text-slate-600 dark:text-slate-400">{category.description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.subItems?.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="group text-right bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:ring-2 hover:ring-brand-primary dark:hover:ring-brand-primary-light"
          >
            <h3 className="text-2xl font-bold text-brand-primary dark:text-brand-primary-light mb-2">{item.title}</h3>
            {item.description && <p className="text-slate-600 dark:text-slate-400">{item.description}</p>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryScreen;
