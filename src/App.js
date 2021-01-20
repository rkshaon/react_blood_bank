import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Nav from './components/Nav';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import BecomeDonor from './pages/BecomeDonor';
import RequestBlood from './pages/RequestBlood';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/becomedonor">
          <BecomeDonor />
        </Route>
        <Route exact path="/requestblood">
          <RequestBlood />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
