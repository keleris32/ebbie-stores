import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NewNav, Footer } from './Components';
import Home from './Pages/Home/Home';
import Apparel from './Pages/Apparel/Apparel';
import GlobalProvider from './Context/Provider';
import ScrollToTop from './Helpers/ScrollToTop';
import SideNav from './Components/SIdeNav/SideNav';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <GlobalProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <NewNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/apparel">
              <Apparel />
            </Route>
          </Switch>
          <Footer />
          <SideNav
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
