
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navbar1 from "./Navbar1";
// import Signin from "./details/sign";
// import Login from "./details/login";
import './navbar.css'
// import Sidebar from "./Sidebar";

function NavbarComp() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleSignupClick = () => setShowSignup(true);

  const closeModel = ()=>{
    setShowLogin(false);
    setShowSignup(false)
  }
  

  return (
    <div>
      <Navbar className="custom-navbar" id="barr">
        <Container>
          <Navbar.Brand href="#home">NextDoor</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button
              className="custom-button signin-button"
              onClick={handleSignupClick}
            >
              SIGNUP
            </button>
            <span></span>
            <button
              className="custom-button login-button"
              onClick={handleLoginClick}
            >
              LOGIN
            </button>
            <span></span>
            {/* <Sidebar/> */}
            
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
      <Navbar1 />
      {showLogin && (
        <div className="model">
          <div className="model-content">
            <h2>Login</h2>
            <br />
            <form>
              <label>UserName: </label> &nbsp;
              <input type="text" placeholder="Enter UserName"></input>
              <br /> 
              <label>Password: </label> &nbsp;
              <input type="password" placeholder="Enter the password"></input>
            </form>
            <br />
            <button onClick={closeModel}>Close</button>
          </div>
        </div>
      )}

      {showSignup && (
        <div className='model'>
          <div className="model-content">
            <h2>Signup</h2>
            <br />
            <form>
              <label>UserName: </label> &nbsp;
              <input type="text" placeholder="Enter UserName"></input>
              <br />
              <label>Email-Id: </label> &nbsp;
              <input type="email" placeholder="Enter Email-id"></input>
              <br /> 
              <label>Password: </label> &nbsp;
              <input type="password" placeholder="Enter the password"></input>
              <br />
              <label>Confirm Password: </label> &nbsp;
              <input type="password" placeholder="Enter the password"></input>
            </form>
            <br />
            <button onClick={closeModel}> close </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarComp;
