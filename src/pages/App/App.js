//import { Switch, Route } from 'react-router-dom';
// import { path } from '../../routes';
// import CustomInput from '../../components/CustomInput/custom-input';
import CustomButton from '../../components/CustomButton/custom-button';
import './App.css';
import ArtisansCard from '../../components/ArtisansCard/artisans-card';
import Navbar from '../../components/NavMenu/navbar';
import Footer from '../../components/Footer/Footer';
import ArtisansCard from '../../components/ArtisansCard/artisans-card';
import Navbar from '../../components/NavMenu/navbar';


function App() {
  return (
    <div className="App">
      {/* <CustomInput 
        type="text"
        placeholder="I am looking for a..."
      /> */}
      <CustomButton />
      <ArtisansCard name='peter godwin' skill='mechanic' phoneno='0807766336' email='jango@email.com'/>
      <Navbar/>
      {/* <CustomButton /> */}
      <Footer />
      <CustomButton />
      <ArtisansCard 
        name='peter godwin' 
        skill='mechanic' 
        phoneno='0807766336' 
        email='jango@email.com'
      />
      <Navbar/>
    </div>
  );
}

export default App;
