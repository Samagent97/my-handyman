import { Component } from 'react';
import Homepage from '../Home/Homepage';
import Blog from '../Blog/Blog';
import {path} from '../../routes';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import viewBlog from '../ViewBlog/ViewBlog';
// import { blogger } from '../../utils/blogger';
// import AboutUs from '../AboutUs/AboutUs'

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
          <Route exact path={`${path.viewBlog}/:id`} component={viewBlog}/>
        </Switch>
      </div>
      );
  }
}

export default App;
