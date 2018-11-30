import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header"
import App from './components/App';

class Home extends Component {
  render() {
    return (     
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Header} />
            {/* <Route path="/app" component={App} /> */}
          </Switch>
          <App />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));


