import React from "react";

export default function SiteImage(props) {
  const currentWork = {
    Weather: {
      title: "Weather App",
      alt: "image of weather site",
      imgpath: "src/images/weather.png",
      siteLink: "https://weather-app-react-88.netlify.app/",
      description:
        "A current weather and forecast application. You can search any city in the Open Weather API and view a 6 day forecast. Built in React and is responsive.",
    },
    PetName: {
      title: "AI Pet Name Generator",
      alt: "image of pet name generator site",
      imgpath: "src/images/AIpetname.png",
      siteLink: "https://ai-petname-generator.netlify.app/",
      description:
        " The AI Pet Name Generator is built in React and uses the API of SheCodes to put together a relevant query based on the species and ~vibe~ of your pet. It then produces a name for your pet. Rarely ever misses (depending on your interpretation of rarely).",
    },
    Cocktail: {
      title: "Cocktail Recipe Generator",
      alt: "image of cocktail recipe generator site",
      imgpath: "",
      siteLink: "",
    },
  };

  return (
    <div className="col">
      <img
        src={require("../images/weatherapp.png")}
        alt={props.title}
        title={props.title}
        className="img-fluid"
      />
    </div>
  );
}
