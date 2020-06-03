import React from 'react';
import Navigation from './components/navigation';
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Forgot from "./pages/forgotpass";
import Reset from "./pages/resetpass";
import Subscription from "./pages/subscription"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>         
        <Route path="/login" exact>
          <Login />
        </Route>         
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Route path="/forgotpass" exact>
          <Forgot />
        </Route>
        <Route path="/resetpass" exact>
          <Reset />
        </Route>
        <Route path="/subscription" exact>
          <Subscription />
        </Route>            
      </Switch>
    </div>

    </Router>    
  );
}

export default App;
