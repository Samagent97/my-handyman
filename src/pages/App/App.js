import { Switch, Route } from 'react-router-dom';
import { path } from '../../routes';
import CustomInput from '../../components/CustomInput/custom-input';
import CustomButton from '../../components/CustomButton/custom-button';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CustomInput 
        type="text"
        placeholder="I am looking for a..."
      /> */}
      <CustomButton />
    </div>
  );
}

export default App;
