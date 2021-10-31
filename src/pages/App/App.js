import { Component } from 'react';
import Homepage from '../Home/Homepage';
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
