Flashcard Quiz AppA modern and interactive web application built with React that allows users to test their knowledge across various topics, create custom flashcards, and review their progress.FeaturesUser Authentication: Secure sign-up and login functionality for a personalized experience.Topic-Based Quizzes: Users can select quizzes from a variety of predefined topics.Random Quiz Mode: Challenge yourself with a random question from any category.Interactive Quiz Interface: A clean and engaging UI for answering multiple-choice questions with instant feedback.Flashcard Creation: Users can create their own custom flashcards with a front (question/term) and back (answer/definition).Flashcard Review: A dedicated section to browse and study all created flashcards with a cool flip animation.Responsive Design: The application is fully responsive and works seamlessly on desktops, tablets, and mobile devices.Tech StackThis project was built using a modern front-end stack:Front-End: React (v18.2.0)Routing: React Router (v6) for client-side navigation.Styling:Tailwind CSS: A utility-first CSS framework for rapid UI development.Headless UI: Unstyled, fully accessible UI components.Material-UI (MUI): Used for pre-built components like Cards and Buttons to ensure a consistent design.Icons: HeroiconsGetting StartedTo get a local copy up and running, follow these simple steps.PrerequisitesYou'll need to have Node.js (version 14 or later) and npm installed on your machine.Installation & SetupClone the repository:git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:cd your-repo-name
Install NPM packages:npm install
Start the development server:npm start
The application will open automatically in your browser at http://localhost:3000.Available ScriptsIn the project directory, you can run:npm start: Runs the app in development mode.npm test: Launches the test runner in interactive watch mode.npm run build: Builds the app for production to the build folder.npm run eject: Note: this is a one-way operation. This removes the single build dependency from your project and copies all configuration files and transitive dependencies (webpack, Babel, etc.) right into your project.Project StructureThe project follows the standard create-react-app folder structure:/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── ... (other static assets)
└── src/
    ├── components/
    │   ├── Navbar.js
    │   ├── Footer.js
    │   ├── Topic.js
    │   └── ... (reusable UI components)
    ├── pages/
    │   ├── Home.js
    │   ├── Login.js
    │   ├── QuizTopics.js
    │   └── ... (page-level components)
    ├── App.js        # Main application component with routing
    ├── index.css     # Global styles
    └── index.js      # Entry point of the React application
Future EnhancementsHere are some ideas for future features:Quiz Results: Implement a results page to show the user's score and a summary of their answers.Backend Integration: Connect the flashcard creation to a database so they are saved per user.Timed Quizzes: Add a timer for an extra layer of challenge.User Profiles: Expand the profile page to show quiz history and performance statistics.





Quiz-it
What problem are we adressing:
Many new programming learners embrace themselves to learn different technologies and skills at the same time. At the early stage of their career, they experiment with different technologies to use it in real life. However, according to a research, Human memory retention and recall processes, done in University of Nottingham, pointed out that new learners often feel confident about their newly gained knowledge because they think they will remember everything. However, in reality, knowledge gained in a shooter period of time only stays in their short time memory, and never transforms into their long time memory. So, we want to solve(or attempt to solve) the problem of programmers- learning and retaining that knowledge in their long term memory.

How are we solving it?
There is a psychological phenomenon known as : Retrieval aids later retention. There is clear evidence from psychological experiments that practicing retrieval of something after learning it, for instance by taking a quiz or test, makes you more likely to retain it for the long term. So our idea is to build a comprehensive Quiz Website, where learners will be able to take quizzes from a variety of topics, and test their skills. Testing also helps with finding gaps in the learning. By using our website, learners will be motivated to study the topics they don’t know, and frequent testing will also help them to retain the knowledge in their long term memory.
