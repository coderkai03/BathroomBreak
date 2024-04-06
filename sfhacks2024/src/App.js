import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home/Home';
import Study from './Study/Study';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/map'>
              <Study />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
