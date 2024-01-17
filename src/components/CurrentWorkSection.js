import React from "react";

export default function CurrentWorkSection(props) {
  if (props.orient === "image-left") {
    return (
      <div className="row">
        <div className="col">
          <img src="" alt="" />
        </div>
        <div className="col">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            perferendis id ullam minus laudantium officiis error quibusdam
            veritatis!{" "}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            perferendis id ullam minus laudantium officiis error quibusdam
            veritatis!{" "}
          </p>
        </div>
        <div className="col">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
