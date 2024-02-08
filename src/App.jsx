import Navbar from './components/Navbar.jsx';
import LoginSignup from './components/LoginSignup.jsx';
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <LoginSignup />
      </>
      )
  }
}