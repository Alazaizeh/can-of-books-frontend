import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

// import IsLoadingAndError from './IsLoadingAndError';
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./User";
import Profile from "./Profile";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not,
                 render the `Login` component */}
              <User />
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default App;
