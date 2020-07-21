import React from 'react';
import Main from './Pages/Main';
import Developer from './Pages/dev';
import Questions from './Components/Questions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/dev" component={Developer} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </Router>
  );
}

export default App;
