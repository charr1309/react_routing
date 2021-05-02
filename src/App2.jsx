import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./views/Welcome";
import Films from "./views/Films";
import People from "./views/People";
import Vehicles from "./views/Vehicles";
import Locations from "./views/Locations";
import IndividualFilm from "./views/IndividualFilm";
import Navbar from "./components/Navbar";
import "./App.css";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/films/:id">
          {loggedIn ? <IndividualFilm /> : <Redirect push to="/login" />}
        </Route>
        <Route path="/login">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/vehicles">
          <Vehicles />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
