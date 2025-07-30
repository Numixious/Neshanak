Neshanak - نشانک
![alt text](https://storage.googleapis.com/project-screenshots/neshanak-cover.png)
An interactive web app to help children with learning disabilities practice reading and writing in Persian, using AI-generated content.
(یک وب اپلیکیشن تعاملی برای کمک به کودکان دارای اختلالات یادگیری در تمرین خواندن و نوشتن فارسی، با استفاده از محتوای تولید شده توسط هوش مصنوعی.)
Table of Contents
Introduction
Features
Tech Stack
Project Structure
Getting Started
Prerequisites
Installation
Environment Variables
Contributing
License
Introduction (معرفی)
Neshanak is a child-friendly, engaging, and educational web application designed to provide a supportive learning environment for Persian-speaking children, especially those facing learning challenges. The app breaks down the fundamentals of reading and writing into fun, interactive modules.
At its core, Neshanak leverages the power of the Google Gemini API to create dynamic and personalized content. This includes generating short stories based on topics chosen by the child, creating unique images for writing prompts, and providing encouraging, constructive feedback on their writing. The integration of the Google Cloud Text-to-Speech API ensures that every piece of text is accessible, helping children associate written words with their correct pronunciation.
Features (ویژگی‌ها)
The app is divided into two main sections: Reading and Writing.
📖 Reading Section (بخش خواندن)
A structured curriculum designed to build reading skills from the ground up.
Alphabet Learning: Interactive flashcards and games for mastering the Persian alphabet.
Letter Combinations: Practice combining consonants and vowels.
Graded Word & Sentence Reading: Levels of increasing difficulty to build confidence.
Fluent Reading: A collection of short, simple stories to improve reading fluency.
AI Story Generation: Children can pick a topic (e.g., animals, space, friendship), and the Gemini API generates a unique, simple story for them to read.
Interactive Quizzes: Fun quizzes for signs, combinations, words, and reading comprehension to reinforce learning.
✍️ Writing Section (بخش نوشتن)
A comprehensive set of tools and exercises to develop writing abilities.
Letter & Combination Practice: Multiple-choice and dictation exercises for writing letters and sounds.
Word Dictation: Listen to a word and type it out correctly.
Sentence Construction:
Sentence Unscrambler: Arrange scrambled words to form a correct sentence.
Find the Mistake: Identify and correct spelling errors in sentences.
AI-Powered Creative Writing:
The Gemini API generates a fun, simple image (e.g., "a happy cartoon lion").
The child writes a sentence describing the image.
The Gemini API provides gentle, positive, and constructive feedback on their writing, correcting mistakes while praising their effort.
✨ Core Technologies
AI Content: Dynamic stories, images, and feedback powered by the Google Gemini API.
Text-to-Speech: High-quality Persian audio for every word and sentence, powered by the Google Cloud TTS API, enhancing accessibility and learning.
Interactive Mini-Games: Engaging games for letter recognition that make learning feel like playing.
Responsive & Themed UI: A clean, colorful, and intuitive interface that works on any device, complete with a light/dark mode toggle.
Tech Stack (تکنولوژی‌های مورد استفاده)
Frontend: React, TypeScript, Vite
Styling: Tailwind CSS
AI Services:
Google Gemini API (@google/genai)
Google Cloud Text-to-Speech API
Project Structure (ساختار پروژه)
Generated code
/src
├── /components/      # React components for different screens and UI elements
│   ├── /shared/      # Reusable components (Header, Spinner, etc.)
│   └── ...           # Components for each screen
├── /data/            # Static data for curriculum, quizzes, and games
├── /services/        # Modules for interacting with external APIs (Gemini, TTS)
├── /types/           # TypeScript type definitions
├── App.tsx           # Main application component with routing logic
├── index.tsx         # Entry point for the React application
└── ...
Use code with caution.
Getting Started (راه‌اندازی پروژه)
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites
Node.js (version 18 or higher)
npm or yarn
A Google API Key with the "Generative Language API" and "Text-to-Speech API" enabled. You can get one from the Google AI Studio and Google Cloud Console.
Installation
Clone the repository:
Generated bash
git clone https://github.com/your-username/neshanak.git
cd neshanak
Use code with caution.
Bash
Install dependencies:
Generated bash
npm install
# or
yarn install
Use code with caution.
Bash
Set up your environment variables:
Create a new file in the root of the project named .env.
Add your Google API Key to this file. See the Environment Variables section below for details.
Run the development server:
Generated bash
npm run dev
# or
yarn dev
Use code with caution.
Bash
The application should now be running on http://localhost:5173.
Environment Variables (متغیرهای محیطی)
To run this project, you need to provide your Google API key. This key is used for both the Gemini API and the Text-to-Speech API.
Create a file named .env in the root of your project directory.
Add the following line to the file, replacing YOUR_API_KEY with your actual key:
Generated env
API_KEY="YOUR_API_KEY"
Use code with caution.
Env
The Vite configuration is set up to make this key available to the application during development and build processes.
Contributing (مشارکت)
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License (مجوز)
Distributed under the MIT License. See LICENSE for more information.
ساخته شده با ❤️ برای همه بچه‌های ایران
