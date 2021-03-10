import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './Components/Header/Header';
import { createContext } from 'react';
import { useState } from 'react';
import SelectedItem from './Components/SelectedItem/SelectedItem';
import NotFound from './Components/NotFound/NotFound';



export const categoryContext = createContext();

function App() {
  const [category, setCategory] = useState('breakfast', 'price');

  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/fooditem/:id">
            <SelectedItem />
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </categoryContext.Provider>

  );
}

export default App;
