import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import { Nav, Footer, Home, Map, User, Login } from "./components";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";


/*function App() {


  return (<Router>
    <div className="App">
      <Nav />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          <Footer/>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
*/


const App = () => {
  return (
    <div className="center w85">
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route
            exact
            path="/create"
            component={CreateLink}
          />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;