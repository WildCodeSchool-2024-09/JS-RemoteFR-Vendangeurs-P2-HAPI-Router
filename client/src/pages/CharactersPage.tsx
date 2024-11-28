import { useEffect, useState } from "react";
import "./CharactersPage.css";
import AncestryFilter from "../components/AncestryFilter";
import CharactersCards from "../components/CharactersCards";
import HouseFilter from "../components/HouseFilter";
import Search from "../components/SearchBar";
import { useTheme } from "../context/theme";

interface CharacterProps {
  id: string;
  name: string;
  image?: string;
  patronus?: string;
  house: string;
  wand: {
    wood?: string;
    core?: string;
    length?: number;
  };
  ancestry: string;
  gender: string;
}

export default function CharactersPage() {
  const { theme } = useTheme();
  const [characters, setCharacters] = useState<CharacterProps[] | null>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentAncestry, setCurrentAncestry] = useState("");
  const [currentHouse, setCurrentHouse] = useState("");

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error(error));
  }, []);

  if (!characters) {
    return <div className="loadingAPI">Loading...</div>;
  }

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const ancestry = [...new Set(characters.map((a) => a.ancestry))];
  const houses = [...new Set(characters.map((a) => a.house))];

  return (
    <div className={theme}>
      <h3 className="charactersTitle">Characters</h3>
      <Search onSearch={handleSearch} />
      <section className="sortingSection">
        <h5 id="sortTitle">Sort : </h5>
        <AncestryFilter
          ancestry={ancestry}
          setCurrentAncestry={setCurrentAncestry}
        />
        <HouseFilter houses={houses} setCurrentHouse={setCurrentHouse} />
      </section>
      <section className="charactersCards">
        {filteredCharacters
          .filter((a) => a.ancestry.includes(currentAncestry))
          .filter((a) => a.house.includes(currentHouse))
          .map((character) => (
            <CharactersCards key={character.id} character={character} />
          ))}
      </section>
    </div>
  );
}
