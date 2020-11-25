import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch, NavLink,} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import * as ReactBootstrap from "react-bootstrap";
export default class Navbarr extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-custom">
          <ReactBootstrap.Navbar
            collapseOnSelect
            expand="lg"
             bg="white"
            variant="dark"
            
          >
            <ReactBootstrap.Navbar.Brand href="#home">
            <h1 className="navbar-logo">MEDIC<i style={{transform: "matrix(0.7, -0.31, 0.3, 0.9, 0, 0)" }} className="fas fa-cart-plus"></i>RT   </h1>
              
            </ReactBootstrap.Navbar.Brand>
             <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background: 'blue'}} /> 
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav" className="nv" >
              <ReactBootstrap.Nav className="mr-auto"></ReactBootstrap.Nav>
              <ReactBootstrap.Nav>
              <div className="roww">
                <div>
                <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/about"> <button className="icon1 ic"><a className="icon-text" href="/">REGISTER</a></button></NavLink>
          <NavLink to="/contact"><button className="icon2 ic"><a className="icon-text2" href="/">LOGIN</a></button> </NavLink> */}

<NavLink to="/signup"> <button className="icon1 ic icon-text">REGISTER</button></NavLink>
<NavLink to="/login"><button className="icon2 ic icon-text">LOGIN </button> </NavLink>




                
                
                <div className="divider"/>
                {/* <button className="icon ic"> <i className="fas fa-cart-plus"></i></button>  */}
                <a href="/"><i className="fas fa-cart-plus ic cart1"></i></a>
                {/* <button className="icon ic"> <i className="fas fa-user-circle"></i></button>  */}
                <a href="/"><i className="fas fa-user-circle ic cart2"></i></a>
                </div>
              </div>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Navbar>
        </div>
      </div>
    );
  }
}
