import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CurrentWorkSection.css";

export default function CurrentWorkSection(props) {
  if (props.orient === "image-left") {
    return (
      <div className="CurrentWorkSection container">
        <div className="row">
          <div className="col">
            <img
              src={require("../images/weatherapp.png")}
              alt={props.title}
              title={props.title}
              className="img-fluid"
            />
          </div>
          <div className="col">
            <div className="description">
              <h4>{props.title}</h4>
              <p>
                A current weather and forecast application. You can search any
                city in the Open Weather API and view a 6 day forecast. Built in
                React and is responsive.{" "}
              </p>
              <a
                href={props.siteLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-branded"
              >
                Launch this App
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentWorkSection container">
        <div className="row">
          <div className="col">
            <div className="description">
              <h4>{props.title}</h4>
              <p>
                The AI Pet Name Generator is built in React and uses the API of
                SheCodes to put together a relevant query based on the species
                and ~vibe~ of your pet. It then produces a name for your pet.
                Rarely ever misses (depending on your interpretation of rarely).{" "}
              </p>
              <a
                href={props.siteLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-branded"
              >
                Launch this App
              </a>
            </div>
          </div>
          <div className="col">
            <img
              src={require("../images/AIpetname.png")}
              alt={props.title}
              title={props.title}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}
