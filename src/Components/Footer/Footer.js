import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
        <div className="footer mt--9 pt-7">
  
  
        <div className="row footer-rowtop">
          
          <div className="col-sm-2 footer-links">
            <h4  className="footer-logo">MEDIC<i style={{transform: "matrix(0.7, -0.31, 0.3, 0.9, 0, 0)" }} className="fas fa-cart-plus"></i>RT  </h4>
            
          </div>
          
          <div className="col-sm-2 footer-links">
            
          </div>
          
          <div className="col-sm-2 footer-links">
            <h4>Quicklinks</h4>
            <a href="/">Pharmacies near you</a>
            <br />
            <a href="/">E-Wallet</a>
            <br />
            <a href="/">Helps & FAQs</a>
            <br />
            <a href="/">Terms and Conditions</a>
          </div>
          
          <div className="col-sm-2 footer-links">
           
          </div>
          
          <div className="col-sm-4 footer-links">
           
            <div className="forrm">
          <h4>Stay Connected with us</h4>
        </div>
        </div>
         
          </div>
        </div>
    );
  }
}

