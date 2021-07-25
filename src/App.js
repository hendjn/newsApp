
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';
import Index from "./components/Index";
import Tracks from "./tracks/Tracks";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/tracks" component={Tracks} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
