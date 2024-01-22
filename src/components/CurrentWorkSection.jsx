import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CurrentWorkSection.css";

export default function CurrentWorkSection(props) {
  if (props.orient === "image-left") {
    return (
      <div className="CurrentWorkSection">
        <div className="row">
          <div className="col">
            <img src={props.imgpath} alt={props.title} title={props.title} />
          </div>
          <div className="col">
            <h4>{props.title}</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              perferendis id ullam minus laudantium officiis error quibusdam
              veritatis!{" "}
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
    );
  } else {
    return (
      <div className="CurrentWorkSection">
        <div className="row">
          <div className="col">
            <h4>{props.title}</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              perferendis id ullam minus laudantium officiis error quibusdam
              veritatis!{" "}
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
          <div className="col">
            <img src={props.imgpath} alt={props.title} title={props.title} />
          </div>
        </div>
      </div>
    );
  }
}
