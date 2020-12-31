
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Functioncomptest from "./components/functioncomptest";
import Classcomptest from "./components/classcomptest";

function App() {
  return (
    <div >


      <Router>

        <div className="container">
          <div className="row m-5">
            <div className="col-md-4" ><Link to="/">Function Component Test</Link></div>
            <div className="col-md-4"  ><Link to="/classcomptest">Class Component Test</Link></div>

          </div>
        </div>

        <div >



          <Switch>
            <Route exact path='/' component={Functioncomptest}></Route>
            <Route exact path='/classcomptest' component={Classcomptest}></Route>

          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
