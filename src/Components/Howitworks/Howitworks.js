import React from "react";
import map from "../Assets/Images/map.png";
import cart from "../Assets/Images/cart.png";
import vectorr from "../Assets/Images/vectorr.png";
// import why from "../Assets/Images/why.png";

export default function Howitworks() {
  return (
    <div>
       <h2 className="title"> HOW IT WORKS</h2>
      <div className="content">
        
        <div className="row">
          <div className="column">
            <img src={map} alt="Snow" style={{ width: "70%"}} />
            <p className="paragraph">Find medications anywhere </p>
          </div>
          <div className="column">
            <img src={cart} alt="Forest" style={{ width: "70%" }} />
            <p
              className="paragraph"
              style={{ marginTop: "-7%", marginLeft: "28%" }}
            >
              Add to your Cart{" "}
            </p>
          </div>
          <div className="column">
            <img src={vectorr} alt="Mountains" style={{ width: "70%" }} />
            <p className="paragraph">Recieve it at your doorstep </p>
          </div>
        </div>
      </div>
    </div>
  );
}
