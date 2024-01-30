import React from "react";

export default function SiteDescription(props) {
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

  let selection = currentWork[props.data];

  return (
    <div className="col SiteDescription">
      <div className="description">
        <h4>{selection.title}</h4>
        <p> {selection.description} </p>
        <a
          href={selection.siteLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-branded"
        >
          Launch this App
        </a>
      </div>
    </div>
  );
}
