import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Dog from "./components/pages/Dog";
import DataFromJSON from "./components/pages/DataFromJSON";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dog" component={Dog} />
        <Route path="/dataFromJSON" component={DataFromJSON} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
