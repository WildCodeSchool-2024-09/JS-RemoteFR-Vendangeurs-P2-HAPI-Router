import "./ChooseHouseHome.css";
import { useState } from "react";
import Card from "../components/Card";
import { useTheme } from "../context/theme";

function ChooseHouseHome() {
  const [changeColor, setChangeColor] = useState("Gryffindor");

  const { setTheme } = useTheme();

  console.info("ChooseHouseHome.tsx", changeColor);

  function handleChange(style: string) {
    setTheme(style);
    setChangeColor(style);
  }

  return (
    <div className={`choose-house-home ${changeColor.toLowerCase()}`}>
      <h1>Hapi Router</h1>
      <h2>Choose Your House</h2>

      <div className="card-container">
        {/* Gryffindor Card */}
        <Card
          house="Gryffindor"
          imageSrc="src/assets/images/Gryffindor.png"
          description="Bravery and Chivalry"
          onClick={() => handleChange("Gryffindor")}
        />

        {/* Hufflepuff Card */}
        <Card
          house="Hufflepuff"
          imageSrc="src/assets/images/Hufflepuff.png"
          description="Loyalty and hard working"
          onClick={() => handleChange("Hufflepuff")}
        />

        {/* Ravenclaw Card */}
        <Card
          house="Ravenclaw"
          imageSrc="src/assets/images/Ravenclaw.png"
          description="Wit and learning"
          onClick={() => handleChange("Ravenclaw")}
        />

        {/* Slytherin Card */}
        <Card
          house="Slytherin"
          imageSrc="src/assets/images/Slytherin.png"
          description="Cunning and ambition"
          onClick={() => handleChange("Slytherin")}
        />
      </div>
    </div>
  );
}

export default ChooseHouseHome;
