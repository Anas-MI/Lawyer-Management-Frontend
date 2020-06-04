import React from 'react';
import Navigation from './components/navigation';
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Forgot from "./pages/forgotpass";
import Reset from "./pages/resetpass";
import Subscription from "./pages/subscription"
import Blogcard from "./pages/blogcard"
import Blogpage from './pages/blogpage';

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
        <Route path="/login">
          <Login />
        </Route>         
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/forgotpass">
          <Forgot />
        </Route>
        <Route path="/resetpass">
          <Reset />
        </Route>
        <Route path="/subscription">
          <Subscription />
        </Route>
        <Route path="/blog">
          <Blogcard />
        </Route>
        <Route path="/blogpage">
          <Blogpage />
        </Route>                 
      </Switch>
    </div>

    </Router>    
  );
}

export default App;
