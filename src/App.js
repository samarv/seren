import React from "react";
import Landing from "./screens/Landing.js";
import Thanks from "./screens/Thanks.js";

import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Thanks">
          <Thanks />
        </Route>
        {/* this runs at last */}
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
