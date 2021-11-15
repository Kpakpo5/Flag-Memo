import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../../containers/Header';
import Home from '../../containers/Home';
import QuizScreen from '../../containers/Quizscreen';
import ResultScreen from '../../containers/ResultScreen';
import Footer from '../Footer';

import './style.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <QuizScreen />
        </Route>
        <Route exact path="/resultat">
          <ResultScreen />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
};

export default App;
