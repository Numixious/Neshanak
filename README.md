# Neshanak - نشانک 📚✏️

An interactive web app designed to help children with learning disabilities practice reading and writing in Persian, using AI-generated stories and feedback.

---

![Neshanak Application Screenshot](https://via.placeholder.com/800x450.png?text=Add+a+Screenshot+of+Neshanak+Here)


---

## 🌟 About The Project

**Neshanak** (meaning "Bookmark" in Persian) is a tool for young learners, especially those facing challenges like dyslexia. It provides a fun, engaging, and supportive environment to build foundational literacy skills in the Persian language. The app is divided into two main sections: **Reading** and **Writing**, each containing a structured curriculum with various exercises, games, and quizzes.

The app leverages the power of Google's Gemini API to create dynamic, on-demand stories for reading practice and to provide gentle, encouraging feedback on children's writing exercises.

### Built With

* React
* TypeScript
* Tailwind CSS
* Vite

---

## ✨ Key Features

### 📖 Reading Practice (بخش خواندن)

* **Structured Curriculum:** Progress through levels, from recognizing letters (نشانه ها) and combinations (ترکیب ها) to reading words (کلمه خوانی), sentences (جمله خوانی), and short stories (روان خوانی).
* **Interactive Learning:**
    * **Alphabet & Combination Views:** Clickable cards to hear the sounds of letters and their combinations.
    * **Interactive Quizzes:** Multiple-choice quizzes to test letter and sound recognition.
    * **Word & Sentence Banks:** Extensive lists of words and sentences organized by difficulty level with text-to-speech support.
* **AI-Powered Story Generation:** A dedicated "Reading Screen" where children can choose a topic (like 'animals' or 'friendship'), and the Gemini API generates a unique, simple, age-appropriate story for them to read.
* **Text-to-Speech:** Integrated speech synthesis allows children to hear words, sentences, and stories read aloud.

### ✍️ Writing Practice (بخش نوشتن)

* **Comprehensive Skill Building:** Covers everything from letter formation to sentence construction.
* **Variety of Exercises:**
    * **Multiple-Choice Spelling:** Choose the correct spelling of a word or sound.
    * **Dictation (املا):** Listen to a sound, word, or combination and type it correctly.
    * **Sentence Unscramble:** Drag and drop words to form a correct sentence.
    * **Find the Mistake:** Identify and correct spelling errors in a given sentence.
* **AI-Powered Creative Writing:**
    * The Gemini API generates a unique, child-friendly image.
    * The child writes a sentence describing the image.
    * The Gemini API provides positive and constructive feedback, praising the child's effort and gently showing the corrected sentence.
* **Interactive Games:** Fun, mini-games for each letter of the alphabet to reinforce recognition and sound association.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/neshanak.git](https://github.com/your-username/neshanak.git)
    cd neshanak
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Set up your environment variables:**
    You will need a Google Gemini API key.
    * Create a file named `.env` in the root of the project.
    * Add your API key to this file:
        ```env
        VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
        ```
    > **Important:** The application code is set up to read this key. In a production environment (like Vercel or Netlify), you would set this as a secret environment variable in your hosting provider's dashboard.

4.  **Run the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```

5.  Open `http://localhost:5173` (or the address provided in your terminal) to view it in the browser.

---

## 📁 Project Structure

The project is organized into the following main directories:
