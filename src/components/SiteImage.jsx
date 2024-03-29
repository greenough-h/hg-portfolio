import React from "react";
import weatherImage from "../images/weatherapp.png";
import petNameImage from "../images/AIpetname.png";
import pinnaclesImage from "../images/Pinnacles.png";
import { motion } from "framer-motion";

export default function SiteImage(props) {
  const currentWork = {
    Weather: {
      title: "Weather App",
      alt: "image of weather site",
      imgNameImport: weatherImage,
      siteLink: "https://weather-app-react-88.netlify.app/",
      description:
        "A current weather and forecast application. You can search any city in the Open Weather API and view a 6 day forecast. Built in React and is responsive.",
    },
    PetName: {
      title: "AI Pet Name Generator",
      alt: "image of pet name generator site",
      imgNameImport: petNameImage,
      siteLink: "https://ai-petname-generator.netlify.app/",
      description:
        " The AI Pet Name Generator is built in React and uses the API of SheCodes to put together a relevant query based on the species and ~vibe~ of your pet. It then produces a name for your pet. Rarely ever misses (depending on your interpretation of rarely).",
    },
    Cocktail: {
      title: "Cocktail Recipe Generator",
      alt: "image of cocktail recipe generator site",
      imgNameImport: "src/images/AIpetname.png",
      siteLink: "",
    },

    Pinnacles: {
      title: "Pinnacles National Park Travel Site",
      alt: "Image of landing site for Pinnacles national park travel site",
      imgNameImport: pinnaclesImage,
      sitelink: "https://neon-pasca-10d87b.netlify.app/",
      description:
        "This site is built with vanilla HTML and CSS and was a project to further my responsive web design skills. I thoroughly enjoyed building this site despite having learned all the skills to potentially make it more complex (cue the parade of potential React components). It was so enjoyable to just create something that really resonated with what I'm passionate about - being outdoors and with my friends hiking and enjoying nature. Also, this park is a really an exceptional place to do just that and it was fun to try and capture that with some of my own personal images and experiences.",
    },
  };

  let selection = currentWork[props.data];

  return (
    <div className={`col-md-6 SiteImage ${props.className}`}>
      <motion.div
        // is it worth bringing in a sliding animation?
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={selection.imgNameImport}
          alt={selection.alt}
          title={selection.title}
          className={`img-fluid ${props.className}`}
        />
      </motion.div>
    </div>
  );
}
