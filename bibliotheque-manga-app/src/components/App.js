import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Accueil from './Accueil'

function App() {
  return (
    <div>
      <header>
        <div className="container-header">
          <NavBar>

          </NavBar>
        </div>
      </header>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/accueil" />
        </Route>
        <Route path="/accueil" component={Accueil} />
      </Switch>
    </Router>

    </div>
  );
}

export default App;
