import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/layout/header/Navbar';
import Routes from './components/routes/RouteController';


function App() {
  return (
    //<Router> is a wrapper for <BrowserRouter> which is must required for react-router-dom to call <Routes> inside
      <Router> 
        <div className="App"> 
          <Navbar />
          <Routes />
        </div> 
      </Router>
  );
}

export default App;
