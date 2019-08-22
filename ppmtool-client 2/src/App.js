import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./Layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/project/UpdateProject";
import Landing from "./Layout/Landing";
import Login from "./components/userManagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityAction";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public Routes
            }

            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            {
              //Private Routes
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route
              exact
              path="/updateProject/:numero"
              component={UpdateProject}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
