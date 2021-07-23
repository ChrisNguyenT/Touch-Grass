import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';
import { Redirect } from 'react-router';
import { setContext } from '@apollo/client/link/context';
// import { Nav, Footer, Home, Map, User, Login } from "./components";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Auth from '../src/utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {


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
/*
function App() {
  const [user, setUser] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }

  return (
    <div className="App">
      <Router>
      <Nav />
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Route exact path='/' handleLogin={handleLogin} render={
          props => <Login {...props} user={user.toString()}
            handleLogin={handleLogin} />} />
        <ProtectedRoute exact path='/login' user={user} handleLogout={handleLogout} component={Login} />
        <Route exact path='/unauthorized' component={Unauthorized} />
        </div>
    </div>
      </Router>
  </div>
  );
}
*/

export default App;


