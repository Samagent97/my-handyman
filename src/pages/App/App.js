import { Switch, Route } from 'react-router-dom';
import { path } from '../../routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={path.home} render={() => <h1>Home</h1>} />
        <Route exact path={path.login} render={() => <h1>Login</h1>} />
        <Route exact path={path.register} render={() => <h1>Register</h1>} />
      </Switch>
    </div>
  );
}

export default App;
