import React from "react";
import Main from "./Pages/Main";
import Developer from "./Pages/dev";
import Questions from "./Components/Questions";
import Results from "./Components/Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/dev' component={Developer} />
        <Route exact path='/questions' component={Questions} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/add_details' component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;
