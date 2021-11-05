import { Component } from 'react';
import Homepage from '../Home/Homepage';
import Blog from '../Blog/Blog';
import {path} from '../../routes';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Contact from '../Contact/Contact';
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
          <Route exact path={path.contact} component= {Contact} />
          <Route exact path={`${path.viewBlog}/:id`} component={(props) => {
            return <h1>{props.match.params.id}</h1>
            }} />
        </Switch>
      </div>
      );
  }
}

export default App;
