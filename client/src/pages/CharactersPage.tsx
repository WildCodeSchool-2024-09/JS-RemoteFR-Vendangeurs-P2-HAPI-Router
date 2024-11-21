import { useEffect, useState } from "react";
import "./CharactersPage.css";
import missingCharacterImage from "../assets/images/missing_character.jpg";

interface CharacterProps {
  id: string;
  name: string;
  image?: string;
  patronus?: string;
  house?: string;
  wand: {
    wood?: string;
    core?: string;
    length?: number;
  };
}
export default function CharactersPage() {
  const [characters, setCharacters] = useState<CharacterProps[] | null>(null);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error(error));
  }, []);

  if (!characters) {
    return <div className="loadingAPI">Loading...</div>;
  }

  return (
    <section className="charactersCards">
      {characters.map((character) => (
        <div key={character.id} className={`characterCard ${character.house}`}>
          <picture className="characterPicture">
            <img
              src={character?.image || missingCharacterImage}
              alt={character.name}
              id="characterImage"
            />
          </picture>

          <section className="characterBody">
            <div className="cardName">
              <h3>{character.name}</h3>
            </div>
            <div className="characterCardBody">
              <h3>Wand :</h3>
              <p>Wood : {character.wand.wood || "???"}</p>
              <p>Core : {character.wand.core || "???"}</p>
              <p>Length : {character.wand.length || "???"} inches</p>
              <h3>Patronus : {character.patronus || "???"}</h3>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
}
