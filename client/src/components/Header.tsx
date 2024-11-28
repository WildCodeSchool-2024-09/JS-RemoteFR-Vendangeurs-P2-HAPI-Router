import { NavLink } from "react-router-dom";
import "./Header.css";
import { useRef, useState } from "react";
import music from "../assets/audio/mainmusic.mp3";
import gryffindorEmblem from "../assets/images/Gryffindor.png";
import hogwartsEmblem from "../assets/images/Hogwarts.png";
import hufflepuffEmblem from "../assets/images/Hufflepuff.png";
import ravenclawEmblem from "../assets/images/Ravenclaw.png";
import slytherinEmblem from "../assets/images/Slytherin.png";
import { useTheme } from "../context/theme";

export default function Header() {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));
  let emblem: string;
  switch (theme) {
    case "gryffindor":
      emblem = gryffindorEmblem;
      break;
    case "slytherin":
      emblem = slytherinEmblem;
      break;
    case "hufflepuff":
      emblem = hufflepuffEmblem;
      break;
    case "ravenclaw":
      emblem = ravenclawEmblem;
      break;
    default:
      emblem = hogwartsEmblem;
  }

  const handleEmblemClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <header className={`header ${theme}Header`}>
      <section className="header-title">
        <h1 id="title">Hapi Router</h1>
        <figure className="houseEmblem">
          <img
            src={emblem}
            alt={`${theme} emblem`}
            onClick={handleEmblemClick}
            id="houseEmblem"
            onKeyUp={handleEmblemClick}
          />
        </figure>
      </section>
      <nav>
        <ul className="headerNav">
          <li>
            <NavLink to={"/home"} id="navHome">
              Home <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/characters"} id="navCharacters">
              Characters
              <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/spells"} id="navSpells">
              Spells
              <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} id="navChooseHouse">
              Choose your house
              <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/copyright"} id="navChooseHouse">
              Copyright
              <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
