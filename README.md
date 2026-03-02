#  Quiz Game Challenge

An interactive, category-based quiz application built with React and Vite. Provides timed questions, score tracking, and personalized result feedback for an engaging learning experience.

---

##  Problem Statement

Many quiz applications lack engagement and fail to adapt to different user skill levels.  
This can lead to boredom, low retention, and poor learning outcomes.

**This project solves:**
- Provides category selection and difficulty levels  
- Adds timed questions to increase engagement  
- Tracks scores and provides detailed results  

---

##  Project Goals

- Create a responsive, interactive quiz experience  
- Implement timed questions and scoring logic  
- Demonstrate proficiency with React, Context API, and async APIs  
- Build a frontend app that could easily integrate with a backend  

---

##  Tech Stack

- **Frontend:** React, React Router, Context API, Vite  
- **API:** Open Trivia DB API  
- **Languages:** JavaScript, HTML, CSS  

---

##  Features

- Category-based quizzes  
- Timed questions  
- Score tracking and result summary  
- Difficulty selection  
- Responsive design  

---

##  Screenshots

> *Add screenshots or GIFs showing gameplay, score results, and question flow.*

---

##  Live Demo

 [Quiz Game Live](https://quiz-game-silk-xi.vercel.app)  

---

##  Installation Instructions

1. Clone the repo:

```bash
git clone https://github.com/mombeh/quiz-game-challenge.git
cd quiz-game-challenge
npm install
npm run dev
```

2. Open `http://localhost:5173` in your browser

---

##  Project Structure

```
quiz-game-challenge/
│
├── src/
│   ├── components/   # Reusable UI components
│   ├── context/      # Global state management
│   ├── pages/        # Screens for quiz and results
│   ├── services/     # API calls
│   └── App.jsx
├── public/           # Static assets
├── package.json
├── vite.config.js
└── README.md
```

---

##  Challenges Faced

- Managing global state across components with Context API  
- Handling async API requests for trivia questions  
- Implementing accurate timers for each quiz question  
- Ensuring smooth UX with multiple categories and difficulty levels  

---

##  What I Learned

- State management with React Context  
- Working with external APIs asynchronously  
- Implementing timers and dynamic UI updates  
- Enhancing user experience for interactive applications  

---

##  Future Improvements

- Add a backend to store high scores per user  
- Include user authentication and profiles  
- Add more interactive question types (e.g., drag & drop, multiple answers)  
- Add a leaderboard and analytics dashboard  
- Convert to TypeScript for type safety
