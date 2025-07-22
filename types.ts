import type { CurriculumItem } from './data/curriculum';
import { Story } from './data/fluentReadingData';

export enum Screen {
  HOME,
  READING_MENU,
  READING,
  WRITING,
  ALPHABET_GAME,
  MENU_CATEGORY,
  CONTENT_PLACEHOLDER,
  SIGNS_QUIZ,
  COMBINATIONS_VIEW,
  COMBINATIONS_QUIZ,
  WORD_READING_LEVEL,
  WORD_READING_QUIZ,
  SENTENCE_READING_LEVEL,
  SENTENCE_READING_QUIZ,
  FLUENT_READING_MENU,
  FLUENT_READING_STORY,
  COMPREHENSION_QUIZ,
  WRITING_MENU,
  LETTER_MATCHING_GAME,
  WRITING_SIGNS_MCQ,
  WRITING_SIGNS_LEARN,
  WRITING_SIGNS_DICTATION,
  WRITING_COMBINATIONS_MCQ,
  WRITING_COMBINATIONS_DICTATION,
  WRITING_WORDS_MCQ_MENU,
  WRITING_WORDS_MCQ_QUIZ,
  WRITING_WORDS_DICTATION_MENU,
  WRITING_WORDS_DICTATION_QUIZ,
  WRITING_SENTENCES_UNSCRAMBLE_MENU,
  WRITING_SENTENCES_UNSCRAMBLE_QUIZ,
  WRITING_SENTENCES_FIND_MISTAKES_MENU,
  WRITING_SENTENCES_FIND_MISTAKES_QUIZ,
}

export interface WordMcqQuestion {
  soundPrompt: string;
  soundToSpeak: string;
  correctAnswer: string;
  incorrectAnswer: string;
}

export interface WordQuizGroup {
  id: string;
  title: string;
  questions: WordMcqQuestion[];
}

export interface WordDictationQuestion {
  sound: string;
  answer: string;
}

export interface WordDictationGroup {
  id: string;
  title: string;
  questions: WordDictationQuestion[];
}

export interface SentenceUnscrambleGroup {
  id: string;
  title: string;
  sentences: string[];
}

export interface FindMistakeQuestion {
  sentence: string;
  answer: string;
}

export interface FindMistakeGroup {
  id: string;
  title: string;
  questions: FindMistakeQuestion[];
}


export type NavigationData = {
    menuItem: CurriculumItem;
    story?: Story;
    wordQuizGroup?: WordQuizGroup;
    wordDictationGroup?: WordDictationGroup;
    sentenceUnscrambleGroup?: SentenceUnscrambleGroup;
    findMistakeGroup?: FindMistakeGroup;
};

export type HistoryItem = {
  screen: Screen;
  data?: NavigationData;
};