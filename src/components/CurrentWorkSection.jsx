import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CurrentWorkSection.css";
import SiteImage from "./SiteImage";
import SiteDescription from "./SiteDescription";

export default function CurrentWorkSection(props) {
  return (
    <div className="CurrentWorkSection container">
      <div className="row">
        <SiteImage className={props.orient} data={props.content} />
        <SiteDescription data={props.content} />
      </div>
    </div>
  );
}
