import SampleComponent from '../../components/SampleComponent/sample-component';
import './App.css';
import Navbar from '../../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SampleComponent title="My Handy Man"/>
    </div>
  );
}

export default App;
