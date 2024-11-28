import { useEffect, useState } from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/theme";

function Homepage() {
  const { theme } = useTheme();
  const texts = [
    "Expelliarmus!",
    "Wingardium Leviosa!",
    "Avada Kedavra!",
    "Expecto Patronum!",
    "Lumos!",
    "Nox!",
    "Accio!",
    "Alohomora!",
  ];

  const phrases = [
    "Before opting for the Magic Sorting Hat, J.K Rowling envisioned statues of the castle's founders coming to life to choose their students.",
    "Lupin's Patronus is never shown in the saga. ",
    "Hugh Mitchell, the actor who played Colin Creevey, actually became a photographer.",
    "Only 13 of the cast appear in all the films in the saga",
    "Before auditioning in person, Rupert Grint sent a video in which he rapped about his character",
    "Tom Felton must have dyed his hair 18 times over the course of the eight films",
    "Hermione is the only one of the trio to have completed her seventh year at Hogwarts.",
    "The characters shed their wizarding robes in the third film: the director wanted to show the different personalities of Harry, Ron and Hermione through everyday clothes.",
    "The 40 cats that appeared with Professor Umbridge were subsequently adopted by families who had no idea of their “fame”",
    "Dumbledore hired Prof. Lockart to better expose his frauds",
    "Ron is mentioned 5809 times in the films of the books.",
    "Harry Potter and the Philosopher's Stone is the best-selling book of the saga",
    "Some scenes had to be re-shot because Emma Watson was breathing out Daniel Radcliffe and Rupert Grint's lines",
    "James and Oliver Phelps (the Weasley twins) had fun swapping roles on set.",
    "Professor Dumbledore understands Fourchelangue but cannot speak it.",
    "Dumbledore's office is the set that cost the production the most money",
    "On average, Harry Potter is searched nearly 4,090,000 times on the web each month",
    "Nearly 250 body molds in the actors' likenesses were made over the course of the saga ",
    "During the Battle of Hogwarts, Neville and Harry are dressed as their respective fathers on the day they died",
    "J.K Rowling was asked to play Lily Potter in Harry Potter and the Philosopher's Stone. The novelist refused.",
    "Harry Potter and the Goblet of Fire should have been split into two films.",
    "House elves have a life expectancy of 200 years",
    "According to Pottermore, Draco has only had two kind comments over the course of the saga.",
    "Halfway through Harry Potter and the Goblet of Fire, J.K. Rowling realized she'd made a mistake in the writing... so she went back and corrected it - which explains the book's length.",
    "Ron has “Swish and Flick” engraved in his wedding ring - a reference to his first Spells class with Hermione. ",
    "The Magic Selection Board made only seven mistakes: including sending Snape to Slytherin.",
    "Every thirty seconds, someone in the world reads Harry Potter",
    "J.K Rowling hesitated to kill off Ron's character in the middle of the saga",
    "Minerva McGonagall was an excellent Quidditch player.",
    "There's no time limit in Quidditch: the match doesn't end until the Golden Snitch has been caught... a match can last up to six months!",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`homepage ${theme}`}>
      <div className="content">
        <section className="section section1" id="section1">
          <h2 className="titlesHP"> HARRY POTTER UNIVERSE</h2>
          <p>Learn more about your favorite characters</p>
          <section className="trioImg">
            <img
              src={"https://ik.imagekit.io/hpapi/ron.jpg"}
              alt="Ron Weasley"
              className="character-image"
              id="ronImg"
            />
            <img
              src={"https://ik.imagekit.io/hpapi/harry.jpg"}
              alt="Harry Potter"
              className="character-image"
            />
            <img
              src={"https://ik.imagekit.io/hpapi/hermione.jpeg"}
              alt="Hermione Granger"
              className="character-image"
              id="hermioneImg"
            />
          </section>
          <button type="button" className="center-button">
            <NavLink to="/characters" className="navlinks">
              Characters
            </NavLink>
          </button>
        </section>
        <section className="section section2" id="section2">
          <h2 className="titlesHP">What would magic be without spells?</h2>
          <p className="title-spell"> Come to discorver the saga's spells !</p>
          <div
            className={`random-text-container ${visible ? "visible" : "hidden"}`}
          >
            {texts.map((text) => (
              <span key={text} className="random-text">
                {text}
              </span>
            ))}
          </div>
          <button type="button" className="center-button">
            <NavLink to="/spells" className="navlinks">
              Spells
            </NavLink>
          </button>
        </section>
        <section className="section section3" id="section3">
          <h2 className="titlesHP">Useless informations therefore essential</h2>
          <p className="phrase-text">{phrases[currentPhraseIndex]}</p>
        </section>
        <section className="section section4" id="section4">
          <div className="train-container">
            <div className="text-overlay">
              <h2 className="train-title">
                Do you want to test your knowledge? Quiz!!!
              </h2>
              <NavLink to="/quiz/gryffindor">
                <button type="button" className="center-button2">
                  Easy 🪄
                </button>
              </NavLink>
              <NavLink to="/quiz/hufflepuff">
                <button type="button" className="center-button2">
                  Medium 🎃
                </button>
              </NavLink>
              <NavLink to="/quiz/ravenclaw">
                <button type="button" className="center-button2">
                  Hard ☠️
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
