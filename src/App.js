import React from 'react';
import Main from './Pages/Main';
import Developer from './Pages/dev';
import Questions from './Components/Questions';
import Results from './Components/Result';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/career/" component={Main} />
        <Route exact path="/career/dev" component={Developer} />
        <Route exact path="/career/questions" component={Questions} />
        <Route exact path="/career/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
