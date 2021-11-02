import { Component } from 'react';

import Homepage from '../Home/Homepage';
import Blog from '../Blog/Blog';

import './App.css';
import Card from '../../components/Card/Card';



class App extends Component {
   constructor() {
     super()
   } 
   
   render() {
    return (
      <div className='App'>
        <Homepage/>
        <Blog />
      </div>
      );
  }
}

export default App;
