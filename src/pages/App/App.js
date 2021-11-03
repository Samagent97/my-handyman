import { Component } from 'react';

import Homepage from '../Home/Homepage';
import Blog from '../Blog/Blog';
import {path} from '../../routes';
import './App.css';

import {Switch,Redirect, Route } from 'react-router-dom';




class App extends Component {
   constructor() {
     super()
   } 
   
   render() {
    return (
      <div className='App'>
     <Switch>
       <Route exact path={path.home} component= {Homepage} />
       <Route exact path={path.blog} component= {Blog} />
       {/* <Route exact path={path.Profile} component= {profile} /> */}
            </Switch>

      </div>
      );
  }
}

export default App;
