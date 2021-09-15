// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Speakers from "./components/pages/Speakers";
import About from "./components/pages/About";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/speakers" component={Speakers}/>
        <Route path="/about" component={About}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
