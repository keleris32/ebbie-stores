import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NewNav, Footer } from './Components';
import Home from './Pages/Home/Home';
import Apparel from './Pages/Apparel/Apparel';

function App() {
  return (
    <Router>
      <div className="App">
        <NewNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/apparel">
            <Apparel />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
