import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NewNav, Footer } from './Components';
import Home from './Pages/Home/Home';
import Apparel from './Pages/Apparel/Apparel';
import GlobalProvider from './Context/Provider';
import ScrollToTop from './Helpers/ScrollToTop';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <ScrollToTop />
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
    </GlobalProvider>
  );
}

export default App;
