
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import background from './assets/images/background-fm.png';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </Router>
    </div>
  )
};

export default App;
