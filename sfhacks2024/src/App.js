import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home/Home';
import Study from './Study/Study';
import Exams from './Exams/Exams';
import Profile from './Profile/Profile';
import Login from './Logins/Login';

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
            <Route exact path='/study'>
              <Study />
            </Route>
            <Route exact path='/exams'>
              <Exams />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
