import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Controller from './components/layout/Controller';

function App() {
  return (
    //<Router> is a wrapper for <BrowserRouter> which is must required for react-router-dom to call <Routes> inside
      <Router> 
        <div className="App"> 
          <Navbar />
          <Controller />
        </div> 
      </Router>
  );
}

export default App;
