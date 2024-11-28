import { useState } from "react";
import Gryffindor from "../assets/images/Gryffindor.png";
import Hufflepuff from "../assets/images/Hufflepuff.png";
import Ravenclaw from "../assets/images/Ravenclaw.png";
import Slytherin from "../assets/images/Slytherin.png";
import Card from "../components/Card";
import { useTheme } from "../context/theme";
import "./ChooseHouseHome.css";

function ChooseHouseHome() {
  const [changeColor, setChangeColor] = useState("");

  const { setTheme } = useTheme();

  console.info("ChooseHouseHome.tsx", changeColor);

  function handleChange(style: string) {
    setTheme(style);
    setChangeColor(style);
  }

  return (
    <div className={`choose-house-home ${changeColor.toLowerCase()}`}>
      <h1 id="chooseHouseH1">Hapi Router</h1>
      <h2 id="chooseHouseH2">Choose Your House</h2>

      <div className="card-container">
        {/* Gryffindor Card */}
        <Card
          imageSrc={Gryffindor}
          house="Gryffindor"
          description="Bravery & chivalry"
          onClick={() => handleChange("gryffindor")}
        />

        {/* Hufflepuff Card */}
        <Card
          imageSrc={Hufflepuff}
          house="Hufflepuff"
          description="Loyalty & hard working"
          onClick={() => handleChange("hufflepuff")}
        />

        {/* Ravenclaw Card */}
        <Card
          imageSrc={Ravenclaw}
          house="Ravenclaw"
          description="Wisdom wit & learning"
          onClick={() => handleChange("ravenclaw")}
        />

        {/* Slytherin Card */}
        <Card
          imageSrc={Slytherin}
          house="Slytherin"
          description="Cunning & ambition"
          onClick={() => handleChange("slytherin")}
        />
      </div>
    </div>
  );
}

export default ChooseHouseHome;
