import React from 'react';
import {  Route,Router } from 'react-router-dom';
import history from './history';
import Home from "./components/home/index";
import AdminPanel from "./components/adminPage/index";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <header className="App-header">
          <Route exact path='/' component={Home}></Route>
          <Route path='/adminPanel' component={AdminPanel}></Route>
        </header>
      </Provider>
    </Router>

  );
}

export default App;
