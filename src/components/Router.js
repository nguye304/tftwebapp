import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home'
import Champions from './Champions';
import Classes from './Classes';
import Items from './Items';
import LilLegends from './LilLegends';
import Simulator from './Simulator';
import AdminPage from './AdminPage';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Champions/">Champions</Link>
            </li>
            <li>
              <Link to="/Classes/">Classes</Link>
            </li>
            <li>
              <Link to="/Items/">Items</Link>
            </li>
            <li>
              <Link to="/LilLegs/">Lil Legends</Link>
            </li>
            <li>
              <Link to="/Simulator/">Simulator</Link>
            </li>
            <li>
              <Link to="/AdminPage/">Edit Pages</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/Champions/" component={Champions} />
        <Route path="/Classes/" component={Classes} />
        <Route path="/Items" exact component={Items} />
        <Route path="/LilLegs/" component={LilLegends} />
        <Route path="/Simulator/" component={Simulator} />
        <Route path="/AdminPage/" component={AdminPage}/>

      </div>
    </Router>
  );
}

export default AppRouter;
