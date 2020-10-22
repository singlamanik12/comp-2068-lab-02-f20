import React from "react";
// You're likely missing some imports...
import { BrowserRouter as Router, Redirect, Route, Switch ,Link} from "react-router-dom";

import Styles from "./styles";

// Don't forget to import your components
import Home from "./../Home/index";
import About from "./../About/index";

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default Nav;
