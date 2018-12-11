import React, { Component } from 'react';
import './App.css';
import { Route,NavLink,HashRouter,Router,BrowserRouter} from "react-router-dom";

import Home from "../src/Pages/Home";
import Profile from "../src/Pages/Profile";
import SignUp from "../src/Pages/SignUp";
import Navbar from '../src/Components/Navbar/';
import ForgotPassword from '../src/Pages/ForgotPassword';
// import Carousel from '../src/Components/Carousel/';
// import RightComponent from '../src/Components/RightComponent/';
// import Discription from '../src/Components/Discription/';
// import {Container, Row} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
        </div>
        <Route exact={true} path="/" component={SignUp}></Route>
        <Route exact={true} path="/Home" component={Home}></Route>
        <Route exact={true} path="/Profile" component={Profile}></Route>
        <Route exact={true} path="/ForgotPassword" component={ForgotPassword}></Route>
        {/* <Carousel/>
        <Container>
          <Row>
            <Discription/>
          </Row>
          <Row>
            <FormComponent/>
            <RightComponent/>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default App;
