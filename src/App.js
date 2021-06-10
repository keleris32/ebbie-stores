import './App.css';
import { Navbar, Main, NewNav, NewMain, Footer } from './Components';

function App() {
  return (
    <div className="App">
      <NewNav />
      <NewMain />
      {/* <Footer /> */}

      {/* <div className="wrapper">
        <Navbar />
        <Main />
      </div> */}
    </div>
  );
}

export default App;
