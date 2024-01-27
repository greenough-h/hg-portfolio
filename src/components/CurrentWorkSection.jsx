import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CurrentWorkSection.css";
import SiteImage from "./SiteImage";
import SiteDescription from "./SiteDescription";

export default function CurrentWorkSection(props) {
  if (props.orient === "image-left") {
    return (
      <div className="CurrentWorkSection container">
        <div className="row">
          <SiteImage />
          <SiteDescription />
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentWorkSection container">
        <div className="row">
          <SiteDescription />
          <SiteImage />
        </div>
      </div>
    );
  }
}
