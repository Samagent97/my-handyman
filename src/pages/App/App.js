import { Component } from 'react';
import {path} from '../../routes';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../Home/Homepage';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Blog from '../Blog/Blog';
import ViewBlog from '../ViewBlog/ViewBlog';
import Contact from '../Contact/Contact';
import Aboutus from '../About us/AboutUs';


class App extends Component {
  //  constructor() {
  //    super()
  //  } 
   
   render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path={path.home} component= {Homepage} />
          <Route exact path={path.blog} component= {Blog} />
          <Route exact path={path.login} component= {Login} />
          <Route exact path={path.register} component= {Register} />
          <Route exact path={`${path.viewBlog}/:id`} component={ViewBlog}/>
          <Route exact path={path.contact} component= {Contact} />
          <Route exact path={path.profile} component= {Profile} />
          <Route exact path={path.about} component= {Aboutus} />
        </Switch>
      </div>
      );
  }
}

export default App;
