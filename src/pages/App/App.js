import { Component } from 'react';
import Homepage from '../Home/Homepage';
// import Register from '../Register/Register';
// import Login from '../Login/Login'
import './App.css';
import ArtisansBlogCard from '../../components/ArtisansBlogCard/artisansblog-card';


class App extends Component {
   constructor() {
     super()
   } 
   
   render() {
return (
  <div className='App'>
    <Homepage/>
    <ArtisansBlogCard
      title=''
      imageUrl='https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBiYWNrZ3JvdW5kJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      body='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Atvero eos et accusam et justo duo dolores et ea rebum.'
      />
  </div>
   );
 }
}

export default App;
