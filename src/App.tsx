
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full w-full max-w-3xl">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/resultats" element={<ResultsPage />} />
          </Routes>
        </Router>
    </div>
  )
};

export default App;
