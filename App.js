import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Courses from './Courses';
import Ceo from './Ceo';
import Placement from './Placement';
import Faculty from './Faculty';
import Department from './Department';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="app">

            <Router>
              <Switch>
              <Route path="/course">
                <Navbar/>
                <Courses/>

              </Route>   
              <Route path="/depatment">
                <Navbar/>
                <Department/>

              </Route>  
              <Route path="/Faculty">
                <Navbar/>
                <Faculty/>

              </Route>  
              <Route path="/Placement">
                <Navbar/>
                <Placement/>
              
               

              </Route>  
              <Route path="/Coe">
                <Navbar/>
                <Ceo/>
              </Route>

                <Route path="/">
                <Navbar/>
                <Home/>

                </Route>
                
                </Switch>
            </Router>

     
      
    </div>
  );
}

export default App;
