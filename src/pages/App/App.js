import { render } from '@testing-library/react';
import { Component } from 'react';
import Homepage from './Homepage';
import Register from './Register';
import Login from './Login'
import './App.css';


class App extends Component {
   constructor() {
     super()
   } 
   
   render() {
return (
  <div className='App'>
    <Homepage/>
  </div>
   );
 }
}

export default App;
