import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Nav from './components/Nav';
// pages
import BecomeDonor from './pages/BecomeDonor';
import RequestBlood from './pages/RequestBlood';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
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
    </Router>
  );
}

export default App;
