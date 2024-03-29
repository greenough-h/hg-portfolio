import React from "react";
import { motion } from "framer-motion";

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
        " The AI Pet Name Generator is built in React and uses the AI API of SheCodes to put together a relevant query based on the species and ~vibe~ of your pet. It then produces a name for your pet. Rarely ever misses (depending on your interpretation of rarely).",
    },
    Cocktail: {
      title: "Cocktail Recipe Generator",
      alt: "image of cocktail recipe generator site",
      imgpath: "",
      siteLink: "",
    },
    Pinnacles: {
      title: "Pinnacles National Park Travel Site",
      alt: "Image of landing site for Pinnacles national park travel site",
      imgpath: "src/images/Pinnacles.png",
      siteLink: "https://neon-pasca-10d87b.netlify.app/",
      description:
        "This site is built with vanilla HTML and CSS and was a project to further my responsive web design skills. DDespite having learned the skills to make this site more complex (cue the parade of potential React components), it was so enjoyable to just create something that really resonated with what I'm passionate about - being outdoors and with my friends hiking and enjoying nature. Also, this park is a really an exceptional place to do just that and it was fun to try and capture that with some of my own personal images and experiences.",
    },
  };

  let selection = currentWork[props.data];

  return (
    <div className="col-md-6 SiteDescription">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
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
      </motion.div>
    </div>
  );
}
