import { Component } from 'react';
import Homepage from '../Home/Homepage';
import Blog from '../Blog/Blog';
import {path} from '../../routes';
import './App.css';

import {Switch,Redirect, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';



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
       <Route exact path={path.Login} component= {Login} />
       <Route exact path={path.Register} component= {Register} />
            </Switch>

      </div>
      );
  }
}

export default App;
