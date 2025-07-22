import React from 'react';
import { Screen, HistoryItem } from '../../types';
import ThemeToggleButton from './ThemeToggleButton';

interface HeaderProps {
  navigateTo: (screen: Screen) => void;
  navigateBack: () => void;
  history: HistoryItem[];
}

const HomeIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
);

const SparrowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.16,7.57a1,1,0,0,0-1.05.09l-4.5,3.18-1.55-3.3a1,1,0,0,0-.9-.56H3a1,1,0,0,0,0,2h9.45l2.42,5.13-3.6,1.6A1,1,0,0,0,11,17.2a6,6,0,1,0,8.49-8.49A1,1,0,0,0,22.16,7.57ZM17,19a4,4,0,1,1,4-4A4,4,0,0,1,17,19Z" />
    </svg>
);

const BackIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ navigateTo, navigateBack, history }) => {
  return (
    <header className="w-full p-4 flex justify-between items-center bg-white/50 dark:bg-slate-900/70 backdrop-blur-sm shadow-md rounded-b-2xl sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <SparrowIcon className="w-10 h-10 text-brand-primary dark:text-brand-primary-light" />
        <h1 className="text-4xl font-extrabold text-brand-primary dark:text-brand-primary-light">نشانک</h1>
      </div>
      <div className="flex items-center gap-4">
        {history.length > 1 && (
          <>
            <button
              onClick={navigateBack}
              className="flex items-center gap-2 bg-white text-brand-primary hover:bg-brand-primary hover:text-white dark:bg-slate-800 dark:text-brand-primary-light dark:hover:bg-brand-primary-light dark:hover:text-slate-900 transition-all duration-300 font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <BackIcon className="w-6 h-6" />
              <span>بازگشت</span>
            </button>
            <button
              onClick={() => navigateTo(Screen.HOME)}
              className="flex items-center gap-2 bg-white text-brand-secondary hover:bg-brand-secondary hover:text-white dark:bg-slate-800 dark:text-brand-secondary dark:hover:bg-brand-secondary dark:hover:text-white transition-all duration-300 font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                <HomeIcon className="w-6 h-6" />
                <span>خانه</span>
            </button>
          </>
        )}
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
