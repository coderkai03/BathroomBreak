import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home/Home';
import Study from './Study/Study';
import Login from './Logins/Login';
import Deck from './Study/Deck';
import AddDeck from './Study/AddDeck';
import UserProfile from './Profile/profile';

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
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/study'>
              <Study />
            </Route>
            {/* Placeholder routes for Exams and Profile */}
            <Route exact path='/exams'>
              {/* Render Exams component here */}
            </Route>
            <Route exact path='/profile'>
              <UserProfile />
            </Route>
            <Route exact path='/deck/:deckId'>
              <Deck />
            </Route>
            <Route exact path='/add'>
              <AddDeck />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
