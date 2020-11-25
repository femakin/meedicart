import React from "react";
import drug from "../Assets/Images/drug.png";
import baby from "../Assets/Images/baby.png";
import arrow from "../Assets/Images/arrow.png";
import plaster from "../Assets/Images/plaster.png";
import Action from "../Assets/Images/Action.png";
import drugg from "../Assets/Images/drugg.png";
import medical from "../Assets/Images/medical.jpg";

export default function Categories() {
  return (
    <div className="about_container">
      <div>
        <h2 className="title">CATEGORIES</h2>

        <div className="row">
          <div className="columnn">
            <div className="card">
              <img src={baby} alt="" className="img" />
              <p className="card-paragraph">Baby and Child health </p>{" "}
              <a href="/" className="arrow">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>

          <div className="columnn">
            <div className="card">
              <img src={drug} alt="" className="img" />
              <p className="card-paragraph">Treatments and Medicaments </p>{" "}
              <a href="/" className="arrow">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>
          <div className="columnn">
            <div className="card">
              <img src={medical} alt="" className="img" />
              <p className="card-paragraph">Medical Supplies </p>{" "}
              <a href="/" className="arrow">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>

          <div className="columnn">
            <div className="card">
              <img src={plaster} alt="" className="img" />
              <p className="card-paragraph">First Aid </p>{" "}
              <a href="/" className="arrow">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>

          <div className="columnn">
            <div className="card">
              <img src={Action} alt="" className="img" />
              <p className="card-paragraph">Sexual Wellbeing </p>
              <a href="/" className="arrow">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>

          <div className="columnn">
            <div className="card">
              <img src={drugg} alt="" className="img" />
              <p className="card-paragraph">Personal Care </p>{" "}
              <a href="/" className="arrow">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
