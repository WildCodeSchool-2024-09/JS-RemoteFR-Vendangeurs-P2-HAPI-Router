import "./ChooseHouseHome.css";
import { useState } from "react";
import Card from "../components/Card";
import { useTheme } from "../context/theme";

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
          imageSrc="src/assets/images/Gryffindor.png"
          house="Gryffindor"
          description="Bravery & chivalry"
          onClick={() => handleChange("gryffindor")}
        />

        {/* Hufflepuff Card */}
        <Card
          imageSrc="src/assets/images/Hufflepuff.png"
          house="Hufflepuff"
          description="Loyalty & hard working"
          onClick={() => handleChange("hufflepuff")}
        />

        {/* Ravenclaw Card */}
        <Card
          imageSrc="src/assets/images/Ravenclaw.png"
          house="Ravenclaw"
          description="Wisdom wit & learning"
          onClick={() => handleChange("ravenclaw")}
        />

        {/* Slytherin Card */}
        <Card
          imageSrc="src/assets/images/Slytherin.png"
          house="Slytherin"
          description="Cunning & ambition"
          onClick={() => handleChange("slytherin")}
        />
      </div>
    </div>
  );
}

export default ChooseHouseHome;
