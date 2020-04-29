import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import Home from "./components/home/index";
import AdminPanel from "./components/adminPage/index";

function App() {
  return (
    <Router history={history}>
        <header className="App-header">
            <Route exact path='/' component={Home}></Route>
            <Route path='/AdminPanel' component={AdminPanel}></Route> 
        </header>
      </Router>
    
  );
}

export default App;
